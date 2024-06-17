import * as yup from "yup";

const updateOrderSchema = yup.object().shape({
  status: yup.string().required("Status is a required field"),
});

export default updateOrderSchema;
