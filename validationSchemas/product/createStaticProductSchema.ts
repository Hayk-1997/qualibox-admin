import * as yup from "yup";
import staticProductPropertiesSchema from "@/validationSchemas/product/staticProductPropertiesSchema";

const createStaticProductSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is a required field"),
    categoryIds: yup.string().required("Category is a required field"),
  })
  .concat(staticProductPropertiesSchema);

export default createStaticProductSchema;
