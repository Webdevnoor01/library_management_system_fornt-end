/* eslint-disable react/prop-types */
const InputGroup = ({
  type,
  name,
  label,
  value,
  placeHolder,
  Icon,
  onChange,
  onBlur,
  color,
}) => {
  return (
    <div className="inputGroup">
      <label
        htmlFor={name}
        className="inputGroup__label"
        style={{
          color: color,
        }}
      >
        {label}
      </label>
      <div className="inputGroup__wrap">
        <input
          className="inputGroup__input"
          type={type}
          name={name}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {Icon && <Icon className="inputGroup__icon" />}
      </div>
    </div>
  );
};

export default InputGroup;
