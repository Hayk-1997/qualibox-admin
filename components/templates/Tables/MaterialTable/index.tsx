import React from "react";
import SortableHeader from "@/components/atoms/SortableHeader";
import ButtonWithIcon from "@/components/atoms/Buttons/ButtonWithIcon";
import Spinner from "@/components/atoms/Loaders/Spinner";
import { TMaterial, TMaterialsData } from "@/types/material";
import { OrderDirectionEnum } from "@/enums/common";

interface IMaterialTableProps {
  materials: TMaterialsData | null | undefined;
  isLoading: boolean;
  onEdit: (category: TMaterial) => void;
  onDelete: (category: TMaterial) => void;
  orderDirection: OrderDirectionEnum;
  handleSortTable: (name: string, orderDirection: OrderDirectionEnum) => void;
}

const MaterialTable: React.FC<IMaterialTableProps> = ({
  materials,
  isLoading,
  onEdit,
  onDelete,
  handleSortTable,
  orderDirection,
}): React.JSX.Element => {
  return (
    <table className="table">
      <thead>
        <tr>
          <SortableHeader
            name="Id"
            orderDirection={orderDirection}
            onClick={handleSortTable}
          />
          <th scope="col">Name</th>
          <SortableHeader
            name="Price"
            orderDirection={orderDirection}
            onClick={handleSortTable}
          />
          <th scope="col">Cost</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          materials?.data.map((material) => (
            <tr key={material.id}>
              <th scope="row">{material.id}</th>
              <td>{material.name}</td>
              <td>${material.price}</td>
              <td>${material.cost}</td>
              <td>
                <div className="d-flex gap-1">
                  <ButtonWithIcon
                    icon="ri-edit-2-fill"
                    className="btn-primary"
                    onClick={() => onEdit(material)}
                  />
                  <ButtonWithIcon
                    icon="ri-delete-bin-4-line"
                    className="btn-danger"
                    onClick={() => onDelete(material)}
                  />
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>
              <div className="d-flex justify-content-center">
                <Spinner />
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default MaterialTable;
