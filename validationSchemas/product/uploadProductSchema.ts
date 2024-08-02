import * as yup from "yup";

const uploadProductSchema = yup.object().shape({
  materialId: yup.string().required("Material is a required field"),
});

export default uploadProductSchema;
