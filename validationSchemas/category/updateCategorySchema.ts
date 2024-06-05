import * as yup from "yup";

const updateCategorySchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  parentId: yup
    .number()
    .nullable(true)
    .transform((_, val) => (val ? Number(val) : null)),
});

export default updateCategorySchema;
