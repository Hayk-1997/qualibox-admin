import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import { TBackOfficeData } from "@/types/backOffice";

export const backOfficeEndpoint = (builder: ApiEndpointBuilder) => ({
  getBackOffice: builder.query<TBackOfficeData | null>({
    query: () => "back-office",
    providesTags: ["BackOffice"],
  }),
  updateBackOffice: builder.mutation<TBackOfficeData | null>({
    query: (payload) => ({
      url: "back-office",
      method: "POST",
      body: payload,
    }),
    invalidatesTags: ["BackOffice"],
  }),
});
