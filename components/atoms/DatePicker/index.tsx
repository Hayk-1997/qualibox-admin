"use client";

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IPicker {
  date: Date;
  onChange: (date: Date) => void;
}

const Picker: React.FC<IPicker> = ({ date, onChange }) => {
  return (
    <DatePicker
      selected={date}
      onChange={onChange}
      showMonthYearPicker={true}
    />
  );
};

export default Picker;
