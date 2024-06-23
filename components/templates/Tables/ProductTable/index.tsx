import React from "react";
import SortableHeader from "@/components/atoms/SortableHeader";
import ButtonWithIcon from "@/components/atoms/Buttons/ButtonWithIcon";
import Spinner from "@/components/atoms/Loaders/Spinner";

const ProductTable = ({
  orderDirection,
  handleSortTable,
  products,
  onEdit,
  onDelete,
  isLoading,
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
          <SortableHeader
            name="Name"
            orderDirection={orderDirection}
            onClick={handleSortTable}
          />
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          products?.data.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>
                <div className="d-flex gap-1">
                  <ButtonWithIcon
                    icon="ri-edit-2-fill"
                    className="btn-primary"
                    onClick={() => onEdit(product)}
                  />
                  <ButtonWithIcon
                    icon="ri-delete-bin-4-line"
                    className="btn-danger"
                    onClick={() => onDelete(product)}
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

export default ProductTable;
