import React from "react";

import { Modal as ResponsiveModal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

interface IDialog {
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<IDialog> = ({ onClose, children }) => {
  return (
    <ResponsiveModal open center onClose={onClose}>
      {children}
    </ResponsiveModal>
  );
};

export default Dialog;
