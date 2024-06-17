import { TOrderPaid } from "@/types/order";
import { TSelectOptions } from "@/types/common";

export const ORDER_STATUS = {
  accepted: "Accepted",
  done: "Done",
  in_progress: "In Progress",
  canceled: "Canceled",
};

export const ORDERS_SELECT_OPTION: TSelectOptions[] = [
  {
    value: "accepted",
    label: "Accepted",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "in_progress",
    label: "In Progress",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
];

export const ORDER_PAID: TOrderPaid = {
  1: "Paid",
  0: "Non Paid",
};
