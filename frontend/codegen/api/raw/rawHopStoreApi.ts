import { emptySplitApi as api } from "../empty/emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getOrderById: build.query<GetOrderByIdApiResponse, GetOrderByIdApiArg>({
      query: (queryArg) => ({ url: `/order/${queryArg.id}` }),
    }),
    deleteOrderById: build.mutation<
      DeleteOrderByIdApiResponse,
      DeleteOrderByIdApiArg
    >({
      query: (queryArg) => ({ url: `/order/${queryArg.id}`, method: "DELETE" }),
    }),
    getOrder: build.query<GetOrderApiResponse, GetOrderApiArg>({
      query: () => ({ url: `/order` }),
    }),
    postOrder: build.mutation<PostOrderApiResponse, PostOrderApiArg>({
      query: (queryArg) => ({
        url: `/order`,
        method: "POST",
        body: queryArg.order,
      }),
    }),
    getUserById: build.query<GetUserByIdApiResponse, GetUserByIdApiArg>({
      query: (queryArg) => ({ url: `/user/${queryArg.id}` }),
    }),
    deleteUserById: build.mutation<
      DeleteUserByIdApiResponse,
      DeleteUserByIdApiArg
    >({
      query: (queryArg) => ({ url: `/user/${queryArg.id}`, method: "DELETE" }),
    }),
    getUser: build.query<GetUserApiResponse, GetUserApiArg>({
      query: () => ({ url: `/user` }),
    }),
    postUser: build.mutation<PostUserApiResponse, PostUserApiArg>({
      query: (queryArg) => ({
        url: `/user`,
        method: "POST",
        body: queryArg.user,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as rawHopStoreApi };
export type GetOrderByIdApiResponse = /** status 200 Success */ Order;
export type GetOrderByIdApiArg = {
  id: number;
};
export type DeleteOrderByIdApiResponse =
  /** status 200 Success */ HttpStatusCode;
export type DeleteOrderByIdApiArg = {
  id: number;
};
export type GetOrderApiResponse = /** status 200 Success */ Order[];
export type GetOrderApiArg = void;
export type PostOrderApiResponse = /** status 200 Success */ HttpStatusCode;
export type PostOrderApiArg = {
  order: Order;
};
export type GetUserByIdApiResponse = /** status 200 Success */ User;
export type GetUserByIdApiArg = {
  id: number;
};
export type DeleteUserByIdApiResponse =
  /** status 200 Success */ HttpStatusCode;
export type DeleteUserByIdApiArg = {
  id: number;
};
export type GetUserApiResponse = /** status 200 Success */ User[];
export type GetUserApiArg = void;
export type PostUserApiResponse = /** status 200 Success */ HttpStatusCode;
export type PostUserApiArg = {
  user: User;
};
export type OrderStatus = 0 | 1;
export type Order = {
  id: number;
  quantity: number;
  shipDate: string;
  orderStatus: OrderStatus;
};
export type HttpStatusCode =
  | 100
  | 101
  | 102
  | 103
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;
export type User = {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
};
export const {
  useGetOrderByIdQuery,
  useDeleteOrderByIdMutation,
  useGetOrderQuery,
  usePostOrderMutation,
  useGetUserByIdQuery,
  useDeleteUserByIdMutation,
  useGetUserQuery,
  usePostUserMutation,
} = injectedRtkApi;
