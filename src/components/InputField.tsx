interface IInputField {
  label: string;
  className: string;
  type: string;
  name: string;
}

const InputField = ({
  label,
  className,
  type = "text",
  name,
  ...props
}: IInputField) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input type={type} className={`${className}`} name={name} {...props} />
    </div>
  );
};

export default InputField;
