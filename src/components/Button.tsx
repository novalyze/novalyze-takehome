import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  onClick,
  isLoading = false,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`w-full rounded-md bg-primary hover:opacity-85 cursor-pointer duration-200 p-2 text-white mt-3 md:mt-4 
        ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default Button;
