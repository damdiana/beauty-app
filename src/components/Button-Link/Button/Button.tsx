import React, { PropsWithChildren } from "react";
import "../Button-Link.css";
type Props = {
  variant: "text" | "outline" | "full";
  color?: "beige" | "black";
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size: "small" | "medium" | "large";
};
const Button = ({
  variant,
  color,
  type = "button",
  onClick,
  children,
  className = "",
  size,
}: PropsWithChildren<Props>) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${color} ${variant} ${className} btn-${size}`}
    >
      {children}
    </button>
  );
};
export default Button;
