import React, { PropsWithChildren } from "react";
import "./Button.css";
type Props = {
  variant: "text" | "outline" | "full";
  color?: "beige" | "black";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};
const Button = ({
  variant,
  color,
  type = "button",
  onClick,
  children,
  className = "",
}: PropsWithChildren<Props>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${color} btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
