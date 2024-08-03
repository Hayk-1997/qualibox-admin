import { TAddressComponents } from "@/types/common";
import states from "@/constants/states.json";

export const placeAutoCompleteValidation = (
  addressComponents: TAddressComponents,
) => {
  return addressComponents?.some((components) => {
    if (
      components.types.includes("administrative_area_level_1") &&
      !states.ALLOWED_STATE_SHORT_NAMES.includes(components.short_name)
    ) {
      return true;
    }
  });
};

export const setStreetAddressCustomError = (setError) => {
  setError("address", {
    type: "manual",
    message: "Invalid State, Allowed States (Nevada, California, Arizona)",
  });
};
