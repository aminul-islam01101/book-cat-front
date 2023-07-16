/* eslint-disable import/no-cycle */
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query';
import { Mutex } from 'async-mutex';

import { logOut } from '../features/auth/authSlice';
import { RootState } from '../store';

const mutex = new Mutex();

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_SERVER_URL as string,
  credentials: 'include',
  prepareHeaders: (headers, { getState, endpoint }) => {
    const state = getState() as RootState;
    const { user } = state.auth;
    if (user?.accessToken && endpoint.endsWith('P')) {
      headers.set('authorization', user?.accessToken);
    }
    return headers;
  },
});

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 403) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshResult = await baseQuery(
          { credentials: 'include', url: 'auth/refresh' },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logOut());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};
