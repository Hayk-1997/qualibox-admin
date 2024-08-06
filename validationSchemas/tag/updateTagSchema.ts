import * as yup from "yup";

const updateTagSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  color: yup.string().required("Color is a required field"),
});

export default updateTagSchema;
