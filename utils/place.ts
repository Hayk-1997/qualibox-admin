import { geocodeByAddress } from "react-google-places-autocomplete";
import { Control, UseFormSetValue } from "react-hook-form/dist/types/form";
import { TAddressPlace } from "@/types/user";
import {
  placeAutoCompleteValidation,
  setStreetAddressCustomError,
} from "@/utils/validations";
import { UseControllerProps } from "react-hook-form";
import { TBackOfficeData } from "@/types/backOffice";

export const setStreetAddressWithGeometry = (
  place: TAddressPlace,
  setValue: UseFormSetValue,
  control: UseControllerProps<Control>,
): void => {
  geocodeByAddress(place.label).then((results) => {
    const hasError = placeAutoCompleteValidation(results[0].address_components);
    if (hasError) {
      setStreetAddressCustomError(control.setError);
    } else {
      setValue(
        "address",
        {
          ...place,
        },
        { shouldValidate: true },
      );

      setValue(
        "geometry",
        {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        },
        { shouldValidate: true },
      );
    }
  });
};

export const resolveBackOfficeFormDefaultValues = (
  backOffice: TBackOfficeData,
) => ({
  email: backOffice?.email || "",
  deliveryPrice: backOffice?.deliveryPrice || "",
  phone: backOffice?.phone || "",
  address: null,
  tax: backOffice?.tax || "",
  geometry: backOffice?.geometry || "",
});
