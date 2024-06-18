import React, { useCallback } from "react";
import Dialog from "@/components/Dialogs";
import { TOrder, TOrderPaidKey, TUpdateOrderFormRequest } from "@/types/order";
import { ORDER_PAID, ORDERS_SELECT_OPTION } from "@/constants/order";
import SelectWithValidation from "@/components/molecules/SelectWithValidation";
import updateOrderSchema from "@/validationSchemas/order";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SingleValue } from "react-select";
import OrderStaticItems from "@/components/molecules/Order/OrderStaticItems";
import { useUpdateOrderMutation } from "@/lib/apiModules/order/api";

interface IUpdateOrderDialog {
  onClose: () => void;
  order: TOrder;
}

const UpdateOrderDialog: React.FC<IUpdateOrderDialog> = ({
  onClose,
  order,
}): React.JSX.Element => {
  const [updateOrder] = useUpdateOrderMutation();
  const { control, setValue, getValues, watch, handleSubmit } =
    useForm<TUpdateOrderFormRequest>({
      defaultValues: {
        status: order.status,
      },
      resolver: yupResolver(updateOrderSchema),
      mode: "onChange",
    });

  watch("status");

  const onSubmit = useCallback(
    (data: TUpdateOrderFormRequest) => {
      updateOrder({ data, id: order.id });
    },
    [order.id, updateOrder],
  );

  return (
    <Dialog onClose={onClose}>
      <div className="mt-5 w-100">
        <div className="d-flex justify-content-center">
          <div className="ml-10 text-center">
            <h4>Order Details</h4>
          </div>
        </div>
        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row mb-3">
              <div className="col-lg-3 col-md-4 label ">Total</div>
              <div className="col-lg-9 col-md-8">${order.total}</div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3 col-md-4 label">Tax</div>
              <div className="col-lg-9 col-md-8">${order.tax}</div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3 col-md-4 label">Paid</div>
              <div className="col-lg-9 col-md-8">
                {ORDER_PAID[+order.paid as TOrderPaidKey]}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3 col-md-4 label">Status</div>
              <div className="col-lg-9 col-md-8">
                <SelectWithValidation
                  id="status"
                  name="status"
                  value={ORDERS_SELECT_OPTION.find(
                    (item) => item.value === getValues().status,
                  )}
                  onChange={(data: SingleValue) => {
                    setValue("status", data.value);
                  }}
                  control={control}
                  options={ORDERS_SELECT_OPTION}
                  withError={true}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3 col-md-4 label">Shipping Address</div>
              <div className="col-lg-9 col-md-8">
                {order.customer.city}, {order.customer.streetAddress},{" "}
                {order.customer.apartment}
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3 col-md-4 label">Phone</div>
              <div className="col-lg-9 col-md-8">{order.customer.phone}</div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3 col-md-4 label">Email</div>
              <div className="col-lg-9 col-md-8">{order.customer.email}</div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex justify-content-end gap-5">
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={onClose}
                    >
                      Close
                    </button>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-success">
                      Submit Form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <hr />
          <h5 className="mt-0">Order Items</h5>
          <div className="row">
            {order.items.map((item) => (
              <div className="col-12" key={item.id}>
                <OrderStaticItems item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default UpdateOrderDialog;
