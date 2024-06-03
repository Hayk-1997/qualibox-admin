import { MaterialEndpointBuilder } from "@/lib/apiModules/material/api";
import { TMaterialsData } from "@/types/material";

export const materialEndpoint = (builder: MaterialEndpointBuilder) => ({
  getMaterials: builder.query<TMaterialsData, string>({
    query: (query: string) => {
      return `material/all?${query}`;
    },
  }),
});
