import React from "react";
import Select from "react-select";
import { useController, UseControllerProps } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";
import { TSelectOptions } from "@/types/common";
import { selectDropDownStyles } from "@/utils/element";
import FormErrorMessage from "@/components/molecules/FormErrorMessage";

interface ISelectWithValidation extends UseControllerProps<Control> {
  placeholder: string;
  withError: boolean;
  id: string;
  value: TSelectOptions;
  options: string;
  name: string;
  isDisabled?: boolean;
}

const SelectWithValidation: React.FC<ISelectWithValidation> = ({
  ...props
}): React.JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <Select
        {...field}
        styles={{ ...selectDropDownStyles() }}
        name={props.name}
        isDisabled={props.isDisabled}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        options={props.options}
      />
      {props.withError && fieldState.error && (
        <div className="mt-1">
          <FormErrorMessage message={fieldState.error.message} />
        </div>
      )}
    </div>
  );
};

export default SelectWithValidation;
