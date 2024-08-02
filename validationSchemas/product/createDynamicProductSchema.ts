import * as yup from "yup";
import dynamicProductPropertiesSchema from "@/validationSchemas/product/dynamicProductPropertiesSchema";

const createDynamicProductSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is a required field"),
    categoryIds: yup.string().required("Category is a required field"),
    materialIds: yup
      .array()
      .of(yup.object().shape({}))
      .min(1, "Material is a required field"),
  })
  .concat(dynamicProductPropertiesSchema);

export default createDynamicProductSchema;
