import { useState } from "react";

const Input = (props) => {
  const { placeholder, inputId, handleOnChange, inputValue, type } = props;

  return <input type={type} placeholder={placeholder} className="w-28 sm:w-1/4 h-8  bg-gray-50 text-xs sm:text-sm rounded-lg p-3 sm:p-5 m-1" id={inputId} value={inputValue} onChange={handleOnChange} />;
};

export default Input;
