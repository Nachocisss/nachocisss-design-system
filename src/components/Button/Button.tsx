import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(205, 163, 79, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(205, 163, 79, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(205, 163, 79, 0);
  }
`;

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  background: ${(props) =>
    props.variant === "secondary" ? "#4b4b4b" : "#cda34f"};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scale(1.05);
    background: ${(props) =>
      props.variant === "secondary" ? "#3a3a3a" : "#b48d3d"};
  }

  &:active {
    animation: ${pulse} 0.75s;
  }
`;

import { ReactNode } from "react";

export const Button = ({
  children,
  variant = "primary",
  ...props
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  [key: string]: any;
}) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
