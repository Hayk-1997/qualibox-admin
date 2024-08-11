"use client";

import React from "react";
import { useGetAllOrdersSalesCountQuery } from "@/lib/apiModules/order/api";
import Spinner from "@/components/atoms/Loaders/Spinner";

const SalesOrderWidget = (): React.JSX.Element => {
  const { data: ordersSalesCount } = useGetAllOrdersSalesCountQuery("");

  return (
    <div className="card info-card sales-card">
      <div className="card-body">
        <h5 className="card-title">Sales</h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-cart" />
          </div>
          <div className="ps-3">
            {ordersSalesCount ? <h6>{ordersSalesCount}</h6> : <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesOrderWidget;
