import { memo } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';

interface ITextArea extends UseControllerProps<any> {
  withError?: boolean;
  id?: string;
  rows: number;
}

export const TextArea = (props: ITextArea): JSX.Element => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <textarea
        {...field}
        {...(props.id && { id: props.id })}
        className="form-control"
      />
      {props.withError && <p>{fieldState.error && 'invalid'}</p>}
    </>
  );
};

export default memo(TextArea);
