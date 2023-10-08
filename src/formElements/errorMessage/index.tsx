import { memo } from 'react';

interface IErrorMessage {
  message: string;
}

const ErrorMessage = ({ message }: IErrorMessage): JSX.Element => {
  return <p className="text-danger">{message}</p>;
};

export default memo(ErrorMessage);
