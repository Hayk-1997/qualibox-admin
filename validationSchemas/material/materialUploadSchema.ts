import * as yup from "yup";

const uploadMaterialSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  description: yup.string().nullable(true),
  file: yup
    .mixed()
    .required("File is required field")
    .test("fileFormat", "Only image files are allowed", (value) => {
      if (value) {
        const supportedFormats = [".jpeg", ".png", ".jpg"];
        return supportedFormats.includes(value.name.split(".").pop());
      }
      return true;
    }),
});

export default uploadMaterialSchema;
