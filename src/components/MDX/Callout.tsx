import React, { ReactNode } from 'react';
import { FiAlertTriangle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

type CalloutProps = {
  type?: "info" | "warning" | "success" | "error";
  children: ReactNode;
}

const Callout = ({ type = "info", children }: CalloutProps) => {
  return (
    <div className={`
      flex gap-2 px-6 rounded-md shadow-sm bg-gray-100 
      ${type === "info" ? "text-black" : ""}
      ${type === "warning" ? "text-yellow-300" : ""}
      ${type === "success" ? "text-green-700" : ""}
      ${type === "error" ? "text-red-500" : ""}
    `}>
      {children}
    </div>
  );
};

export default Callout;