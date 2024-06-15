import { ApiEndpointBuilder } from "@/lib/apiModules/baseApi";
import { TInfoPagesData } from "@/types/infoPage";

export const infoPageEndpoint = (builder: ApiEndpointBuilder) => ({
  getInfoPages: builder.query<TInfoPagesData | null, string>({
    query: () => `static-page/all`,
    providesTags: ["InfoPage"],
  }),
  updateInfoPage: builder.mutation({
    query: (payload: { type: string; content: string }) => {
      return {
        url: `static-page/${payload.type}/update`,
        method: "POST",
        body: { content: payload.content },
      };
    },
    invalidatesTags: ["InfoPage"],
  }),
});
