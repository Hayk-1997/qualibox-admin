import React from "react";
import { TOrder, TOrderData, TOrderPaidKey } from "@/types/order";
import SortableHeader from "@/components/atoms/SortableHeader";
import ButtonWithIcon from "@/components/atoms/Buttons/ButtonWithIcon";
import Spinner from "@/components/atoms/Loaders/Spinner";
import { OrderDirectionEnum } from "@/enums/common";
import { ORDER_PAID, ORDER_STATUS } from "@/constants/order";

interface IOrderTable {
  orders: TOrderData;
  isLoading: boolean;
  onEdit: (order: TOrder) => void;
  onDelete: (order: TOrder) => void;
  orderDirection: OrderDirectionEnum;
  handleSortTable: (name: string, orderDirection: OrderDirectionEnum) => void;
}

const OrderTable: React.FC<IOrderTable> = ({
  orders,
  isLoading,
  orderDirection,
  handleSortTable,
  onEdit,
  onDelete,
}): React.JSX.Element => {
  return (
    <table className="table">
      <thead>
        <tr>
          <SortableHeader
            name="Total"
            orderDirection={orderDirection}
            onClick={handleSortTable}
          />
          <SortableHeader
            name="Tax"
            orderDirection={orderDirection}
            onClick={handleSortTable}
          />
          <SortableHeader
            name="Discount"
            orderDirection={orderDirection}
            onClick={handleSortTable}
          />
          <th scope="col">Paid</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!isLoading ? (
          orders?.data.map((order) => (
            <tr key={order.id}>
              <th scope="row">${order.total}</th>
              <th scope="row">${order.tax}</th>
              <th scope="row">${order.discount}</th>
              <th scope="row">{ORDER_PAID[+order.paid as TOrderPaidKey]}</th>
              <th scope="row">{ORDER_STATUS[order.status]}</th>
              <td>
                <div className="d-flex gap-1">
                  <ButtonWithIcon
                    icon="ri-edit-2-fill"
                    className="btn-primary"
                    onClick={() => onEdit(order)}
                  />
                  <ButtonWithIcon
                    icon="ri-delete-bin-4-line"
                    className="btn-danger"
                    onClick={() => onDelete(order)}
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

export default OrderTable;
