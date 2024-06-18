import React, { useEffect } from "react";

import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

interface IDialog {
  onClose: () => void;
  unMountHandler?: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<IDialog> = ({ onClose, children, unMountHandler }) => {
  useEffect(() => {
    return () => unMountHandler && unMountHandler();
  }, [unMountHandler]);

  return (
    <ResponsiveModal open center onClose={onClose}>
      {children}
    </ResponsiveModal>
  );
};

export default Dialog;
