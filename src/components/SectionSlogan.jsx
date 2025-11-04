import React from "react";
import TitleMain from "./TitleMain";
import polygon from "@/assets/images/polygon.svg";
import { useFancybox } from "@/customHook/useFancybox";

function SectionSlogan({
  slogan,
  name,
  title,
  description,
  linkVideo,
  className,
  buttonVideo,
}) {
  useFancybox();
  return (
    <section className="section-slogan">
      <div className="image-slogan">
        <img src={slogan} alt="" />
      </div>
      <div className="background-color"></div>
      <div
        className={`content container ${(className = "slogan-gallery"
          ? "slogan-gallery"
          : "")}`}
      >
        <TitleMain
          classMain={`tittle-center ${linkVideo ? "withVideo" : ""}`}
          name={name}
          title={title}
          description={description}
        />
        {buttonVideo}
        {linkVideo && (
          <div className="video" data-fancybox="video" data-src={linkVideo}>
            <img src={polygon} alt="polygon" />
            <span>Treatments Videos</span>
          </div>
        )}
      </div>
    </section>
  );
}
export default SectionSlogan;
