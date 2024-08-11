"use client";
import React from "react";
import { useGetAllCustomersCountQuery } from "@/lib/apiModules/order/api";
import Spinner from "@/components/atoms/Loaders/Spinner";

const CustomersWidget = (): React.JSX.Element => {
  const { data: customerCount } = useGetAllCustomersCountQuery("");

  return (
    <div className="card info-card customers-card">
      <div className="card-body">
        <h5 className="card-title">Customers</h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i className="bi bi-people" />
          </div>
          <div className="ps-3">
            {customerCount ? <h6>{customerCount}</h6> : <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersWidget;
