import React from "react";
import TitleMain from "./TitleMain";

function SectionDetail({
  name,
  title,
  description,
  image,
  key,
  imageAndContent,
  button,
  dataAosLeft,
  dataAosRight,
  dataAosDelay,
}) {
  return (
    <section
      className={`section-detail container contentAndImage ${imageAndContent}`}
      key={key}
    >
      <div
        className="content"
        data-aos={
          (imageAndContent = "imageAndContent" ? dataAosLeft : dataAosRight)
        }
        data-aos-delay={dataAosDelay}
        data-aos-duration="600"
      >
        <TitleMain
          classMain={"tittle-left"}
          name={name}
          title={title}
          description={description}
        />
        {button}
      </div>
      <div
        className="image"
        data-aos={
          (imageAndContent = "imageAndContent" ? dataAosRight : dataAosLeft)
        }
        data-aos-delay={dataAosDelay}
        data-aos-duration="600"
      >
        <img src={image} alt="About Detail" />
      </div>
    </section>
  );
}
export default SectionDetail;
