import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {BACKEND_API_NAME, BACKEND_URL} from '../../config';

// Initialize an empty api service that we'll inject endpoints into using rtk codegen
export const emptyApi = createApi({
  reducerPath: BACKEND_API_NAME,
  baseQuery: fetchBaseQuery(
    {
      baseUrl: BACKEND_URL,
    },
  ),
  endpoints: () => ({}),
});
