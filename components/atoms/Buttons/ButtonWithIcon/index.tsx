import React from "react";

interface IButtonWithIcon {
  icon: string;
  className?: string;
  onClick: () => void;
  disabled?: boolean;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = ({
  icon,
  className = "",
  disabled = false,
  onClick,
}): React.JSX.Element => {
  return (
    <button
      type="button"
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <i className={icon} />
    </button>
  );
};

export default ButtonWithIcon;
