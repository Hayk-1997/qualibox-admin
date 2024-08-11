"use client";

import React, { useMemo } from "react";
import Chart from "@/components/atoms/Chart";
import DatePicker from "@/components/atoms/DatePicker";
import { useGetSoldProductsChartQuery } from "@/lib/apiModules/order/api";

const SoldProductsChart = (): React.JSX.Element => {
  const [date, setDate] = React.useState<Date>(new Date());
  const { data: chartData } = useGetSoldProductsChartQuery({
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  });

  const options = useMemo(() => {
    if (chartData?.length) {
      return chartData.map((data) => ({
        value: data.total_quantity,
        label: data.product_name,
      }));
    }
    return [];
  }, [chartData]);

  return (
    <div className="card info-card sales-card">
      <div className="p-4">
        <DatePicker date={date} onChange={setDate} />
      </div>
      <div className="card-body p-0">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <Chart options={options} />
          </div>
          <div className="col-sm-12 col-md-6">
            <ul className="list-group">
              {options.map((item, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {item.label}
                  <span>Quantity` ({item.value})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldProductsChart;
