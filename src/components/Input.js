import React, { Children } from "react";

export default function Input({
  onClick,
  disabled = false,
  className = "",
  placeholder = "",
  required = false,
  type = "text",
  onChange,
  value,
  name,
  children,
}) {
  return (
    <input
      name={name}
      onClick={onClick}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
      required={required}
      type={type}
      onChange={onChange}
      value={value}
    >
      {children}
    </input>
  );
}
