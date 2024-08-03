import * as yup from "yup";

const backOfficeSchema = yup.object().shape({
  email: yup.string().email().required("Email is a required field"),
  deliveryPrice: yup.string().required("Delivery Price is a required field"),
  tax: yup.string().required("Tax is a required field"),
  address: yup.mixed().nullable(),
  geometry: yup.object().shape().required("Required Attribute"),
  phone: yup
    .string()
    .trim()
    .required("Phone is a required field")
    .matches(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/, "Invalid phone number"),
});

export default backOfficeSchema;
