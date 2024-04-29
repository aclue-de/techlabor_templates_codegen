import { emptyApi as api } from "./emptyApi";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getApiUser: build.query<GetApiUserApiResponse, GetApiUserApiArg>({
      query: () => ({ url: `/api/user` }),
    }),
    postApiUser: build.mutation<PostApiUserApiResponse, PostApiUserApiArg>({
      query: (queryArg) => ({
        url: `/api/user`,
        method: "POST",
        body: queryArg.userRequestDto,
      }),
    }),
    deleteApiUser: build.mutation<
      DeleteApiUserApiResponse,
      DeleteApiUserApiArg
    >({
      query: () => ({ url: `/api/user`, method: "DELETE" }),
    }),
    getApiUserByUserId: build.query<
      GetApiUserByUserIdApiResponse,
      GetApiUserByUserIdApiArg
    >({
      query: (queryArg) => ({ url: `/api/user/${queryArg.userId}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as rawApi };
export type GetApiUserApiResponse = /** status 200 Success */ UserResponseDto[];
export type GetApiUserApiArg = void;
export type PostApiUserApiResponse = /** status 200 Success */
  | UserRequestDto
  | /** status 201 Created */ UserRequestDto;
export type PostApiUserApiArg = {
  userRequestDto: UserRequestDto;
};
export type DeleteApiUserApiResponse = /** status 200 Success */ UserRequestDto;
export type DeleteApiUserApiArg = void;
export type GetApiUserByUserIdApiResponse =
  /** status 200 Success */ UserResponseDto;
export type GetApiUserByUserIdApiArg = {
  userId: string;
};
export type AddressResponseDto = {
  id: string;
  fullAddress: string;
};
export type UserResponseDto = {
  id: string;
  name: string;
  birthday: string;
  addresses: AddressResponseDto[];
};
export type AddressRequestDto = {
  fullAddress: string;
};
export type UserRequestDto = {
  name: string;
  birthday: string;
  addresses: AddressRequestDto[];
};
export const {
  useGetApiUserQuery,
  useLazyGetApiUserQuery,
  usePostApiUserMutation,
  useDeleteApiUserMutation,
  useGetApiUserByUserIdQuery,
  useLazyGetApiUserByUserIdQuery,
} = injectedRtkApi;
