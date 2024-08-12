import React from "react";
import dynamic from "next/dynamic";

const OrdersPageTemplate = dynamic(
  () => import("@/components/templates/Order/OrdersPageTemplate"),
);

const OrdersPage = (): React.JSX.Element => {
  return <OrdersPageTemplate />;
};

export default OrdersPage;
