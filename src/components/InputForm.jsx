import React from "react";

function InputForm({type, name, handleChange, label, value, errors}) {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        placeholder=""
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor={name}>{label}</label>
      <small id="helpId" className="form-text">
        {errors}
      </small>
    </div>
  );
}
export default InputForm;
