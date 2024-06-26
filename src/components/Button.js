import React from "react";

function Button({ onClick, disabled, value, classname }) {
  return (
    <div className="book-btn">
      <button className={classname} onClick={onClick} disabled={disabled}>
        {value}
      </button>
    </div>
  );
}

export default Button;
