import React from "react";

function TitleMain({classMain, name, title, description}) {
  return (
    <div className={classMain}>
      <h5>{name}</h5>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  );
}
export default TitleMain;
