import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import { TUserLoginFormRequest } from "@/types/user";
import { setUserToken } from "@/helpers/auth";

export const authEndpoint = (builder: ApiEndpointBuilder) => ({
  userLogin: builder.mutation({
    query: (payload: TUserLoginFormRequest) => ({
      url: `login`,
      method: "POST",
      body: payload,
    }),
    transformResponse: (response: { data: unknown }) => {
      setUserToken(response.token);
      return response.data;
    },

    invalidatesTags: ["User"],
  }),
});
