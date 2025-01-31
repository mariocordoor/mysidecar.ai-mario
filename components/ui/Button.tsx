import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  value: string;
}

export const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  variant,
  type = "button",
  value,
}) => {
  return (
    <button
      type={type}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`${variant === "primary" ? "primary-button" : "secondary-button"} ${className}`}
    >
      {value}
    </button>
  );
};
