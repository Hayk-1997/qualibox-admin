import React from "react";
import cn from "classnames";

interface ISortableButton {
  orderBy: "asc" | "desc";
}

const SortableButton: React.FC<ISortableButton> = ({
  orderBy,
}): React.JSX.Element => {
  return (
    <button type="button" className="btn">
      <i
        className={cn("bx", {
          "bx-sort-up": orderBy === "asc",
          "bx-sort-down": orderBy === "desc",
        })}
      />
    </button>
  );
};

export default SortableButton;
