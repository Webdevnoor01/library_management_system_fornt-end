/* eslint-disable react/prop-types */

const Button = ({ type, text, onClick, style }) => {
  return (
    <button className="button" type={type} onClick={onClick} style={style}>
      {text}
    </button>
  );
};

export default Button;
