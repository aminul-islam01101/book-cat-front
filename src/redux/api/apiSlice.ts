/* eslint-disable import/no-cycle */
import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithReAuth } from './baseQueryWithReAuth';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: [],
  endpoints: () => ({}),
});
// export const api = createApi({
//   reducerPath: 'api',
//   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_SERVER_URL as string }),
//   tagTypes: [],
//   endpoints: () => ({}),
// });
