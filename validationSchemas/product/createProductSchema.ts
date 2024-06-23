import * as yup from "yup";
import propertiesSchema from "@/validationSchemas/product/propertiesSchema";

const createProductSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is a required field"),
    categoryIds: yup.string().required("Category is a required field"),
  })
  .concat(propertiesSchema);

export default createProductSchema;
