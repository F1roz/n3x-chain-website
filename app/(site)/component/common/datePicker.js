"use client";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const DatePicker = () => {
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: "",
    to: "",
  });
  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      shouldHighlightWeekends
      renderFooter={() => (
        <div className="relative py-[13px]">
          <button className="bg-primary px-[100px] py-[18px] text-sm line-clamp-1 text-white font-medium rounded-[10px] absolute left-[6%] top-0">
            Submit request
          </button>
        </div>
      )}
    />
  );
};

export default DatePicker;
