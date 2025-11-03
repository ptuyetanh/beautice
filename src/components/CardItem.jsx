import React from "react";
import facebookColor from "../assets/images/facebookColor.svg";
import twitterColor from "../assets/images/twitterColor.svg";
import instagramColor from "../assets/images/instagramColor.svg";

function CardItem({
  key,
  name,
  image,
  title,
  description,
  facebook,
  twitter,
  instagram,
  dataAos,
  dataAosDelay
}) {
  return (
    <div className="card-item" key={key} data-aos = {dataAos} data-aos-delay = {dataAosDelay}>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h5>{name}</h5>
      <h3>{title}</h3>
      <p>{description}</p>
      {facebook || twitter || instagram ? (
        <div className="card-item-social">
          <a href={facebook}>
            <img src={facebookColor} alt="facebook-f" />
          </a>
          <a href={twitter}>
            <img src={twitterColor} alt="twitter" />
          </a>
          <a href={instagram}>
            <img src={instagramColor} alt="" />
          </a>
        </div>
      ) : null}
    </div>
  );
}
export default CardItem;
