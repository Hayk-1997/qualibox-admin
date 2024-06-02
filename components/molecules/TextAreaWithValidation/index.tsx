import React, { memo } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { Control, UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldValues } from "react-hook-form/dist/types/fields";
import FormErrorMessage from "@/components/formElements/FormErrorMessage";
import cn from "classname";

import styles from "./styles.module.scss";

interface InputProps extends UseControllerProps<Control> {
  placeholder?: string;
  withError?: boolean;
  register?: UseFormRegister<FieldValues>;
  pattern?: object;
  disabled?: boolean;
}

const TextAreaWitValidation: React.FC<InputProps> = ({
  ...props
}): React.JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <textarea
        {...field}
        className={cn("form-control", {
          [styles.errorInput]: fieldState.error && props.withError,
        })}
        placeholder={props.placeholder}
        disabled={props.disabled}
        {...(props.id && { id: props.id })}
        {...(props.register && {
          ...props.register(field.name, {
            ...props.pattern,
          }),
        })}
      />
      {props.withError && fieldState.error && (
        <div className="mt-1">
          <FormErrorMessage message={fieldState.error.message} />
        </div>
      )}
    </div>
  );
};

export default memo(TextAreaWitValidation);
