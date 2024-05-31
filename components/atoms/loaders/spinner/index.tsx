import React from "react";

interface ISpinnerLoader {
  width?: string;
  height?: string;
}

const Spinner: React.FC<ISpinnerLoader> = ({
  width = "1rem",
  height = "1rem",
}): React.JSX.Element => {
  return (
    <div
      className="spinner-border"
      style={{ width: width, height: height }}
      role="status"
    >
      <span className="sr-only" />
    </div>
  );
};

export default Spinner;
