import React from "react";

const Button = ({ styles, Title}) => (
  <button type="button" className={`py-4 px-6 font-outfit font-medium text-[18px] text-primary bg-[#F3F9FF] rounded-[10px] outline-none ${styles}`}>
    {Title}
  </button>
);

export default Button;