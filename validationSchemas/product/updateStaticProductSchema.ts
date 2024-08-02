import * as yup from "yup";
import staticProductPropertiesSchema from "@/validationSchemas/product/staticProductPropertiesSchema";

const updateStaticProductSchema = yup
  .object()
  .shape({
    id: yup.number().required("Id is a required field"),
    name: yup.string().required("Name is a required field"),
    categoryIds: yup.string().required("Category is a required field"),
  })
  .concat(staticProductPropertiesSchema);

export default updateStaticProductSchema;
