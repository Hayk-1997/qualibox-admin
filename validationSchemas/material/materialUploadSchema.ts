import * as yup from "yup";
import { fileSchema } from "@/validationSchemas/file";

const uploadMaterialSchema = yup
  .object()
  .shape({
    name: yup.string().required("Name is a required field"),
    description: yup.string().nullable(true),
  })
  .concat(fileSchema);

export default uploadMaterialSchema;
