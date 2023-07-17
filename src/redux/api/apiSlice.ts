/* eslint-disable import/no-cycle */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReAuth } from './baseQueryWithReAuth';

const tags: [string] | [] = ['reviews'];
export const privateApiSlice = createApi({
  reducerPath: 'publicApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: tags,
  endpoints: () => ({}),
});
export const publicApiSlice = createApi({
  reducerPath: 'privateApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_SERVER_URL_PRODUCTION as string }),
  tagTypes: tags,
  endpoints: () => ({}),
});
