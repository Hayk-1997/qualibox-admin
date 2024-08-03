import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useController, UseControllerProps } from "react-hook-form";
import { TAddressPlace } from "@/types/common";
import { selectDropDownStyles } from "@/utils/element";
import FormErrorMessage from "@/components/molecules/FormErrorMessage";

interface IPlaceAutoCompleteWithValidation extends UseControllerProps {
  onChange: (data: TAddressPlace) => void;
}

const PlaceAutoCompleteWithValidation: React.FC<
  IPlaceAutoCompleteWithValidation
> = ({ onChange, ...props }): React.JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <GooglePlacesAutocomplete
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_KEY}
        apiOptions={{ language: "us" }}
        autocompletionRequest={{
          componentRestrictions: {
            country: ["us"],
          },
        }}
        {...(props.register && {
          ...props.register(field.name),
        })}
        selectProps={{
          ...field,
          name: props.name,
          id: props.id,
          value: field.value?.label ? field.value : null,
          onChange,
          styles: { ...selectDropDownStyles() },
        }}
      />

      {props.withError && fieldState.error && (
        <div className="mt-1">
          <FormErrorMessage message={fieldState.error.message} />
        </div>
      )}
    </>
  );
};

export default PlaceAutoCompleteWithValidation;
