import React from "react";

export interface ButtonProps {
  buttonTitle: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ buttonTitle, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{buttonTitle}</button>;
};

export default Button;
