import React from "react";
import { OrderDirectionEnum } from "@/enums/common";
import cn from "classnames";

interface ISortableButton {
  orderDirection: OrderDirectionEnum;
}

const SortableButton: React.FC<ISortableButton> = ({
  orderDirection,
}): React.JSX.Element => {
  return (
    <button type="button" className="btn">
      <i
        className={cn("bx", {
          "bx-sort-up": orderDirection === OrderDirectionEnum.ASC,
          "bx-sort-down": orderDirection === OrderDirectionEnum.DESC,
        })}
      />
    </button>
  );
};

export default SortableButton;
