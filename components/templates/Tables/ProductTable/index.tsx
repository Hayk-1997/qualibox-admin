import React from "react";
import SortableHeader from "@/components/atoms/SortableHeader";
import ButtonWithIcon from "@/components/atoms/Buttons/ButtonWithIcon";
import Spinner from "@/components/atoms/Loaders/Spinner";
import { ProductEnum } from "@/enums/product";
import { OrderDirectionEnum } from "@/enums/common";
import { TProduct, TProductData } from "@/types/product";

interface IProductTable {
  orderDirection: OrderDirectionEnum;
  handleSortTable: (name: string, orderDirection: OrderDirectionEnum) => void;
  products: TProductData;
  onEdit: (product: TProduct, type: ProductEnum) => void;
  onDelete: (product: TProduct) => void;
  isLoading: boolean;
}

const ProductTable: React.FC<IProductTable> = ({
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
                    onClick={() =>
                      onEdit(
                        product,
                        product.isDynamicSize
                          ? ProductEnum.DYNAMIC_PRODUCT
                          : ProductEnum.STATIC_PRODUCT,
                      )
                    }
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
