import React from "react";
import { useMask } from "@react-input/mask";
import cn from "classnames";
import FormErrorMessage from "../FormErrorMessage";
import { useController, UseControllerProps } from "react-hook-form";
import { Control } from "react-hook-form/dist/types/form";

import styles from "../inputWithValidation/styles.module.scss";

const PhoneNumberWithValidation: React.FC<UseControllerProps<Control>> = (
  props,
): React.JSX.Element => {
  const { field, fieldState } = useController(props);

  const inputRef = useMask({
    mask: "(___) ___-____",
    replacement: { _: /\d/ },
  });

  return (
    <div>
      <input
        {...field}
        ref={inputRef}
        className={cn("form-control", {
          [styles.errorInput]: fieldState.error && props.withError,
        })}
        placeholder={props.placeholder}
        disabled={props.disabled}
        id={props.id}
      />
      {props.withError && fieldState.error && (
        <div className="mt-1">
          <FormErrorMessage message={fieldState.error.message} />
        </div>
      )}
    </div>
  );
};

export default PhoneNumberWithValidation;
