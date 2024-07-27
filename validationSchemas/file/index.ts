import * as yup from "yup";

export const fileSchema = yup.object().shape({
  file: yup
    .mixed()
    .required("File is required field")
    .test("fileFormat", "Only image files are allowed", (value) => {
      if (value) {
        const supportedFormats = ["jpeg", "png", "jpg"];
        return supportedFormats.includes(value.name.split(".").pop());
      }
      return true;
    }),
});
