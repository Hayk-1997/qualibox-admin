import { memo } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

interface ISelectOption extends UseControllerProps<any> {
  withError?: boolean;
  id?: string;
  options: JSX.Element;
  className?: string;
}

const SelectOption = (props: ISelectOption): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <select
        {...field}
        {...(props.id && { id: props.id })}
        className={props.className && props.className}
      >
        {props.options}
      </select>
      {props.withError && <p>{fieldState.error && 'invalid'}</p>}
    </>
  );
};

export default memo(SelectOption);
