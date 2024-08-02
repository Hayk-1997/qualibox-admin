import * as yup from "yup";
import { array, object, string } from "yup";

const staticProductPropertiesSchema = yup.object().shape({
  properties: array()
    .of(
      object().shape({
        width: string().required("Width is a required field"),
        height: string().required("Height is a required field"),
        depth: string().required("Depth is a required field"),
        price: string().required("Price is a required field"),
        cost: string().required("Cost is a required field"),
        referenceId: string().required("Reference Id is a required field"),
        materialId: string().required("Material is a required field"),
      }),
    )
    .min(1, "You need to on properties"),
});

export default staticProductPropertiesSchema;
