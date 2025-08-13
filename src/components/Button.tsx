import type React from "react";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnText: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const Button: React.FC<IButton> = ({
  btnText,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button type={type} className={`${className}`} {...props}>
      {btnText}
    </button>
  );
};

export default Button;
