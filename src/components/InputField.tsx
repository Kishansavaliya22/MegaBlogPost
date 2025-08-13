import React from "react";

interface IInputField extends React.InputEvent<HTMLInputElement> {
  label?: string;
  className?: string;
  type: string;
  name: string;
}

const InputField: React.FC<IInputField> = ({
  label,
  className,
  type = "text",
  name,
  ...props
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} className={`${className}`} name={name} {...props} />
    </div>
  );
};

export default InputField;
