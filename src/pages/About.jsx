import React, { useEffect } from "react";
import TitleMain from "../components/TitleMain";
import about from "../assets/images/about.png";
import playButton from "../assets/images/playButton.svg";
import SectionTeams from "../components/SectionTeams";
import slogan from "../assets/images/slogan.png";
import SectionSlogan from "../components/SectionSlogan";
import Illustration1 from "../assets/images/illustration1.png";
import Illustration2 from "../assets/images/illustration2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/logo4.svg";
import logo5 from "../assets/images/logo5.svg";
import bubbleLeft2 from '../assets/images/bubbleLeft2.svg'
import bubbleRight2 from '../assets/images/bubbleRight2.svg'
import { useFancybox } from "../customHook/useFancybox";
import Bubble from "../components/Bubble";
import SectionDetail from "../components/SectionDetail";
import useAos from "../customHook/useAos";

function About() {
  const detail = [
    {
      name: "Our Vision",
      title: "Be the best and go international",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
      image: Illustration1,
    },
    {
      name: "Our Mission",
      title: "Special & premium service to any clients",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
      image: Illustration2,
    },
    {
      name: "Our Values",
      title: "Dedicated to giving the best services",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
      image: Illustration1,
    },
  ];
  const showDetail = () => {
    return detail.map((item, index) =>
      index % 2 === 0 ? (
        <SectionDetail
          key={index}
          name={item.name}
          title={item.title}
          description={item.description}
          image={item.image}
          dataAosLeft="fade-left"
          dataAosRight="fade-right"
          dataAosDelay={index * 200}
        />
      ) : (
        <SectionDetail
          key={index}
          name={item.name}
          title={item.title}
          description={item.description}
          image={item.image}
          imageAndContent="imageAndContent"
          dataAosLeft="fade-left"
          dataAosRight="fade-right"
          dataAosDelay={index * 200}
        />
      )
    );
  };
  const logo = [
    {
      id: 1,
      src: logo1,
      alt: "logo1",
    },
    {
      id: 2,
      src: logo2,
      alt: "logo2",
    },
    {
      id: 3,
      src: logo3,
      alt: "logo3",
    },
    {
      id: 4,
      src: logo4,
      alt: "logo4",
    },
    {
      id: 5,
      src: logo5,
      alt: "logo5",
    },
    {
      id: 6,
      src: logo1,
      alt: "logo1",
    }
  ]
  useFancybox();
  useAos();
  return (
    <main>
      <section className="section-about container">
        <TitleMain
          classMain={"tittle-left"}
          name={"About Us"}
          title={
            "We are a leading beauty clinic that has been around since 2002"
          }
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
          }
        />
        <div className="image">
          <img src={about} alt="About Us" />
          <img src={playButton} alt="" className="icon" 
          data-fancybox="video"
          data-src="https://www.youtube.com/watch?v=fRPgHWIRgZ4"
          />
        </div>
      </section>
      <Bubble className={"bubbleRight"} bubble={bubbleRight2}/>
      <SectionTeams />
      <SectionSlogan
        slogan={slogan}
        name={"Business Slogan"}
        title={"Best responsibility and service for our customers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        }
      />
      {showDetail()}
      <Bubble className={"bubbleLeft"} bubble={bubbleLeft2}/>
      <section className="section-logo container">
        <TitleMain
          classMain={"tittle-center"}
          name={"Our Clients"}
          title={"Well-known agencies"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          }
        />
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          //   navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {logo.map((item) => (
            <SwiperSlide>
              <img src={item.src} alt={item.alt} key={item.id}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
export default About;
