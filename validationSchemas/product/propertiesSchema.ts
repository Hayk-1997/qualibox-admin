import * as yup from "yup";
import { array, object, string } from "yup";

const propertiesSchema = yup.object().shape({
  properties: array()
    .of(
      object().shape({
        width: string().required("Width is required"),
        height: string().required("Height is required"),
        depth: string().required("Depth is required"),
        price: string().required("Price is required"),
        cost: string().required("Cost is required"),
        referenceId: string().required("Reference Id is required"),
        materialId: string().required("Material is required"),
      }),
    )
    .min(1, "You need to on properties"),
});

export default propertiesSchema;
