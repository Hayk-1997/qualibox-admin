import * as yup from "yup";

const updateMaterialSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  price: yup.string().required("Price is a required field"),
  cost: yup.string().required("Cost is a required field"),
});

export default updateMaterialSchema;
