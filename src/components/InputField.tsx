import React, { useId } from "react";

interface IInputField extends React.InputEvent<HTMLInputElement> {
  label?: string;
  className?: string;
  type: string;
  name: string;
}

const InputField = (
  { label, className, type = "text", name, ...props }: IInputField,
  ref
) => {
  const id = useId();

  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        className={`${className}`}
        name={name}
        {...props}
      />
    </div>
  );
};

export default React.forwardRef(InputField);
