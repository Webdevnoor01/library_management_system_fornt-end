/* eslint-disable react/prop-types */
import shortid from "shortid";

const Select = ({ name, value, onChange, onBlur, options, styles }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="select"
      style={styles}
    >
      {options.map((option) => (
        <option key={shortid.generate()} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
