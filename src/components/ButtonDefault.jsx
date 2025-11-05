import React from "react";

export default function ButtonDefault({ name, handleSubmit, caretRight }) {
  return (
    <button className="btn-default" onClick={handleSubmit}>
      <span>{name}</span>
      {caretRight}
    </button>
  );
}
