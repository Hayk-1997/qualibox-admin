import * as yup from "yup";

const attachTagSchema = yup.object().shape({
  tagId: yup.string().required("Tag is a required field"),
  value: yup.string().required("Value is a required field"),
});

export default attachTagSchema;
