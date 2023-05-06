import { PropsWithChildren } from "react";
import "../Button-Link.css";

type Props = {
  variant: "text" | "outline" | "full";
  color?: "beige" | "black";
  href: string;
  className?: string;
};

const Link = ({
  children,
  href,
  className,
  variant,
  color,
}: PropsWithChildren<Props>) => {
  return (
    <a href={href} className={`link ${color} ${variant} ${className}`}>
      {children}
    </a>
  );
};

export default Link;
