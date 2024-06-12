import * as yup from "yup";

const uploadMaterialSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  description: yup.string().nullable(true),
});

export default uploadMaterialSchema;
