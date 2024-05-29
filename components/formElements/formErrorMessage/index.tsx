import React, { memo } from "react";

import styles from "./styles.module.scss";

interface IFormErrorMessage {
  message: string;
}
const FormErrorMessage: React.FC<IFormErrorMessage> = ({
  message,
}): React.JSX.Element => {
  return (
    <div className={styles.errorBox}>
      <p className={styles.errorMessage}>{message}</p>
    </div>
  );
};

export default memo(FormErrorMessage);
