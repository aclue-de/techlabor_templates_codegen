import { rawHopStoreApi } from '../raw/rawHopStoreApi';

/**
 *  Adds automatic invalidation for outdated Queries to the Api.
 *  Always use this instead of the 'raw' version of the Api.
 *
 * How do Tags work in Redux Toolkit Query (RTK)?
 *  Tags are used to invalidate data fetched by Queries.
 *  For example:
 *    1. An Operator queries all Users (Get request) to have them displayed in an UI.
 *      1.1 Info: The Query has the property "providesTags: ['User'],
 *    2. The local creates a new User using a mutation (Post request)
 *      2.1 Info: The Mutation has the property "invalidatesTags: ['User'],"
 *    3. RTK knows that the Tag 'User' has been invalidated and when rerun the Query to get all Users
 *
 * Why do we have to enhance Endpoints?
 *  OpenApi.yaml does not support 'Tags'. The tags in openapi.yaml are solely used to group endpoints.
 *  RTK tags have thus to be added after the api generation.
 *
 * Summary:
 *  Mutations (Post, Put, Delete) can be configured to automatically rerun Queries (Get).
 *
 *  Source: https://redux-toolkit.js.org/rtk-query/api/created-api/code-splitting#enhanceendpoints
 */
const hopStoreApi = rawHopStoreApi.enhanceEndpoints({
  addTagTypes: ['User', 'Order'],
  endpoints: {
    // Order
    getOrderById: {
      providesTags: ['Order'],
    },
    deleteOrderById: {
      invalidatesTags: ['Order'],
    },
    getOrder: {
      providesTags: ['Order'],
    },
    postOrder: {
      invalidatesTags: ['Order'],
    },
    // User
    getUserById: {
      providesTags: ['User'],
    },
    deleteUserById: {
      invalidatesTags: ['User'],
    },
    getUser: {
      providesTags: ['User'],
    },
    postUser: {
      invalidatesTags: ['User'],
    },
  },
});
