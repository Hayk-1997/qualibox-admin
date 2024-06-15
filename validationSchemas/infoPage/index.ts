import * as yup from "yup";

const infoPageSchema = yup.object().shape({
  content: yup.mixed().required("Content is a required field"),
});

export default infoPageSchema;
