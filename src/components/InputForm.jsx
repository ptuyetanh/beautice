import React from "react";

function InputForm({type, name, onChange, label}) {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        placeholder=""
        onChange={(e) => onChange(e)}
      />
      <label for={name}>{label}</label>
    </div>
  );
}
export default InputForm;
