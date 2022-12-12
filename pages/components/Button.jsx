import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-outfit font-medium text-[18px] text-primary bg-[#F3F9FF] rounded-[10px] outline-none ${styles}`}>
    Join the waiting list
  </button>
);

export default Button;