import React from "react";
import SortableButton from "@/components/atoms/buttons/sortableButton";

interface ISortableHeader {
  name: string;
  orderBy: "asc" | "desc";
}

const SortableHeader: React.FC<ISortableHeader> = ({
  name,
  orderBy,
}): React.JSX.Element => {
  return (
    <th scope="col">
      {name} <SortableButton orderBy={orderBy} />
    </th>
  );
};

export default SortableHeader;
