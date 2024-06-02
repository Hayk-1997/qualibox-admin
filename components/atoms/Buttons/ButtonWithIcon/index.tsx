import React from "react";

interface IButtonWithIcon {
  icon: string;
  className?: string;
  onClick: () => void;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = ({
  icon,
  className = "",
  onClick,
}): React.JSX.Element => {
  return (
    <button type="button" className={`btn ${className}`} onClick={onClick}>
      <i className={icon} />
    </button>
  );
};

export default ButtonWithIcon;
