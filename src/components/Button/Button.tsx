import "./Button.css";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  [key: string]: any;
}

const Button = ({
  children,
  onClick,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button className={`ds-button ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
