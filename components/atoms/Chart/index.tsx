"use client";

import React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { PieValueType } from "@mui/x-charts/models/seriesType/pie";

interface IPieValueType {
  options: PieValueType[];
}

const Chart: React.FC<IPieValueType> = ({ options }): React.JSX.Element => {
  return (
    <>
      <PieChart
        width={400}
        height={200}
        slotProps={{
          legend: { hidden: true },
        }}
        series={[
          {
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
            data: options,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontWeight: "bold",
          },
        }}
      />
    </>
  );
};

export default Chart;
