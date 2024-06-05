import { useEffect } from "react";

export const useCloseDialogHandler = (
  execute: boolean,
  onClose: () => void,
) => {
  useEffect(() => {
    if (execute) {
      onClose();
    }
  }, [onClose, execute]);
};
