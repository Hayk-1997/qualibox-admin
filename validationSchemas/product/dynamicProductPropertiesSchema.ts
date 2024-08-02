import * as yup from "yup";

const dynamicProductPropertiesSchema = yup.object().shape({
  properties: yup
    .array()
    .of(
      yup.object().shape({
        minWidth: yup.string().required("Width is a required field"),
        maxWidth: yup.string().required("Height is a required field"),
        minHeight: yup.string().required("Depth is a required field"),
        maxHeight: yup.string().required("Price is a required field"),
        minDepth: yup.string().required("Cost is a required field"),
        maxDepth: yup.string().required("Reference Id is a required field"),
        referenceId: yup.string().required("Material is a required field"),
      }),
    )
    .min(1, "Properties is required field"),
});

export default dynamicProductPropertiesSchema;
