import React from "react";

interface IButtonWithIcon {
  icon: string;
  className?: string;
}

const ButtonWithIcon: React.FC<IButtonWithIcon> = ({
  icon,
  className = "",
}): React.JSX.Element => {
  return (
    <button type="button" className={`btn ${className}`}>
      <i className={icon} />
    </button>
  );
};

export default ButtonWithIcon;
