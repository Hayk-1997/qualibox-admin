import { TDynamicProperties, TStaticProperties } from "@/types/property";

export type TOrder = {
  id: string;
  notes: string;
  paid: boolean;
  paymentMethod: number;
  price: number;
  discount: number;
  customerId: number;
  status: TOrderStatus;
  tax: number;
  total: number;
  customer: TCustomer;
  items: TOrderItems;
  updatedAt: string;
  createdAt: string;
  deletedAt: string;
};

export type TOrderItems<P = TDynamicProperties | TStaticProperties> = {
  id: number;
  price: number;
  productName: string;
  quantity: string;
  properties: P;
  thumbnail: {
    id: number;
    materialId: number;
    name: string;
    path: string;
    type: string;
  };
};

export type TOrderData = {
  data: TOrder[];
  total: number;
};

type TOrderStatus = "accepted" | "done" | "in_progress" | "canceled";

export type TOrderPaid = {
  1: "Paid";
  0: "Non Paid";
};

export type TOrderPaidKey = keyof TOrderPaid;

export type TCustomer = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  apartment: string;
  phone: string;
  city: string;
  streetAddress: string;
};

export type TUpdateOrderFormRequest = {
  status: TOrderStatus;
  id: number;
};

export type TSoldProductsChart = {
  product_name: string;
  total_quantity: number;
};
