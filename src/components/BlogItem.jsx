import React from "react";
import blog1 from "@/assets/images/blog1.png";
import folder from "@/assets/images/folder.svg";
import ButtonDefault from "./ButtonDefault";
import caretRight from "@/assets/images/caretRight.svg";

function BlogItem() {
  return (
    <div className="blog-item">
      <div className="image">
        <img src={blog1} alt="" />
      </div>
      <div className="content">
        <div className="blog-name">
          <img src={folder} alt="folder" />
          <span>Consultation</span>
        </div>
        <h3 className="blog-title">
          How much does a consultation cost at our clinic?
        </h3>
        <p className="blog-desc">
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the…
        </p>
        <ButtonDefault
          name={"Read More"}
          caretRight={<img src={caretRight} alt="caretRight" />}
        />
      </div>
    </div>
  );
}
export default BlogItem;
