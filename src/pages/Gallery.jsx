import React from "react";
import TitleMain from "@/components/TitleMain";
import gallery1 from "@/assets/images/gallery1.png";
import gallery2 from "@/assets/images/gallery2.png";
import gallery3 from "@/assets/images/gallery3.png";
import gallery4 from "@/assets/images/gallery4.png";
import useAos from './../customHook/useAos';
import { useFancybox } from './../customHook/useFancybox';
import { Link } from "react-router-dom";
import { PATHS } from './../routes/paths';
import SectionSlogan from "../components/SectionSlogan";
import galleryVideo from "@/assets/images/galleryVideo.png";
import polygon from "@/assets/images/polygon.svg";
import ButtonDefault from './../components/ButtonDefault';
function Gallery() {
  useAos();
  useFancybox();
  const gallery = [
    { id: 1, src: gallery1 },
    { id: 2, src: gallery2 },
    { id: 3, src: gallery3 },
    { id: 4, src: gallery4 },
    { id: 5, src: gallery1 },
    { id: 6, src: gallery2 },
    { id: 7, src: gallery3 },
    { id: 8, src: gallery4 },
    { id: 9, src: gallery1 },
  ];
  return (
    <main>
      <section className="section-gallery container">
        <div className="gallery-top contentAndImage">
          <TitleMain
            classMain={"tittle-left"}
            name={"Gallery"}
            title={"Check out the collection pictures from our clinic"}
          />
          <div className="desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
        </div>
        <div className="image-gallery">
          {gallery.map((item, index) => (
            <div
              className="image-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-fancybox="gallery"
              data-src={item.src}
            >
              <img src={item.src} alt={item.src} />
            </div>
          ))}
        </div>
        <div className="gallery-bottom">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <Link to={PATHS.SERVICE}>our teams</Link>.</p>
        </div>
      </section>
      <SectionSlogan 
        slogan={galleryVideo}
        title={"Watch the video tour"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"}
        buttonVideo={
            <div className="video"
          data-fancybox ="video"
          data-src={"`https://www.youtube.com/watch?v=dQw4w9WgXcQ`"}
          >
            <img src={polygon} alt="polygon" />
          </div>
        }
        className={"slogan-gallery"}
      />
      <section className="section-quota container contentAndImage">
        <TitleMain 
            classMain={"tittle-left"}
            name={"Get The Quota"}
            title={"Want to be handled by our professional team immediately?"}
            description ={"lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, nostra."}
        />
        <ButtonDefault 
            name={"Make an Appointment"}
        />
      </section>
    </main>
  );
}
export default Gallery;
