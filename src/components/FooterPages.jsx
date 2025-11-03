import React from "react";
import vector from "@/assets/images/vector.svg";

function FooterPages({name,pages}) {
  return (
    <div className="footer-pages">
      <h3>{name}</h3>
      {pages && pages.map((page, index) => (
        <div className="pages-link">
            <a href={page.link}>
            <img src={vector} alt="" />
            <span>{page.name}</span>
            </a>
      </div>
      ))}
    </div>
  );
}
export default FooterPages;
