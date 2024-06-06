import React from "react";

function Input({ onChange }) {
  return (
    <div className="input-field">
      <div>Search by book name: </div>
      <input type="text" onChange={onChange} />
    </div>
  );
}

export default Input;
