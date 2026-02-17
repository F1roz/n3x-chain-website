import React from "react";

const Button2 = ({ name }) => {
  return (
    <button className="text-sm font-medium py-[16px] px-[26px] bg-[#2b2b44] hover:bg-[#069CFD] text-white rounded-[36px] transition-all duration-500">
      {name}
    </button>
  );
};

export default Button2;
