import { memo } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import cn from 'classnames';

import styles from './styles.module.scss';

interface InputProps extends UseControllerProps<any> {
  type: string;
  placeholder?: string;
  withError?: boolean;
  id?: string;
  register?: UseFormRegister<any>;
  pattern?: object;
  disabled?: boolean;
}

const Input = (props: InputProps): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input
        {...field}
        className={cn('form-control', {
          [styles.errorInput]: Object.keys(fieldState.error || {}).length,
        })}
        placeholder={props.placeholder}
        type={props.type}
        disabled={props.disabled}
        {...(props.id && { id: props.id })}
        {...(props.register && {
          ...props.register(field.name, {
            ...props.pattern,
          }),
        })}
        {...(props.type === 'number' && { min: 0 })}
      />
      {props.withError &&
        fieldState?.error &&
        Object.keys(fieldState?.error as object).length && (
          <p className={styles.errorMessage}>
            {fieldState.error?.message || 'Required Field'}
          </p>
        )}
    </div>
  );
};

export default memo(Input);
