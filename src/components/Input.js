import React from "react";

function Input({ value, onChange }) {
  return (
    <div className="input-field">
      <div>Search by book name: </div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
