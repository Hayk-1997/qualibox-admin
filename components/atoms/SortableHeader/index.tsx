import React from "react";
import { OrderDirectionEnum } from "@/enums/common";
import SortableButton from "@/components/atoms/Buttons/SortableButton";

interface ISortableHeader {
  name: string;
  orderDirection: OrderDirectionEnum;
  onClick: (name: string, orderBy: OrderDirectionEnum) => void;
}

const SortableHeader: React.FC<ISortableHeader> = ({
  name,
  orderDirection,
  onClick,
}): React.JSX.Element => {
  return (
    <th scope="col" onClick={() => onClick(name, orderDirection)}>
      {name} <SortableButton orderDirection={orderDirection} />
    </th>
  );
};

export default SortableHeader;
