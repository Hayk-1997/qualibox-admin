import * as yup from "yup";
import dynamicProductPropertiesSchema from "@/validationSchemas/product/dynamicProductPropertiesSchema";

const updateDynamicProductSchema = yup
  .object()
  .shape({
    id: yup.number().required("Id is a required field"),
    name: yup.string().required("Name is a required field"),
    categoryIds: yup.string().required("Category is a required field"),
    materialIds: yup
      .array()
      .of(yup.object().shape({}))
      .min(1, "Material is a required field"),
  })
  .concat(dynamicProductPropertiesSchema);

export default updateDynamicProductSchema;
