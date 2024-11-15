/* eslint-disable react/prop-types */
import "./button.scss";


function Button({ onClick }) {
  return (
    <button className="button" type="button" onClick={onClick}>
      Search
    </button>
  );
}

export default Button;
