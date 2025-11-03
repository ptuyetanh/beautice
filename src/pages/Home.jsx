import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import slideImg from "../assets/images/slideImg.svg";
import CardItem from "../components/CardItem";
import service1 from "../assets/images/service1.svg";
import service2 from "../assets/images/service2.svg";
import service3 from "../assets/images/service3.svg";
import TitleMain from "../components/TitleMain";
import serviceMain from "../assets/images/serviceMain.png";
import ButtonDefault from "../components/ButtonDefault";
import playButton from "../assets/images/playButton.svg";
import bubbleRight from "../assets/images/bubbleRight.svg";
import bubbleLeft from '../assets/images/bubbleLeft.svg'
import SectionContact from "../components/SectionContact";
import SectionTeams from "../components/SectionTeams";
import { useFancybox } from "../customHook/useFancybox";
import Bubble from "../components/Bubble";
import useAos from "../customHook/useAos";

function Home() {
  useFancybox();
  useAos();
  const slides = [
    {
      id: 1,
      title: "Clinic & beauty consultant",
      content:
        "It is a long established fact that a reader will beby the readable content of a page.",
      image: slideImg,
    },
    {
      id: 2,
      title: "Professional care for your skin",
      content:
        "It is a long established fact that a reader will beby the readable content of a page.",
      image: slideImg,
    },
    {
      id: 3,
      title: "We are here to help you",
      content:
        "It is a long established fact that a reader will beby the readable content of a page.",
      image: slideImg,
    },
  ];
  const cardServices = [
    {
      id: 1,
      image: service1,
      title: "Service One",
      description:
        "Description for service one. It is a long established fact that a reader will be distracted.",
    },
    {
      id: 2,
      image: service2,
      title: "Service Two",
      description:
        "Description for service two. It is a long established fact that a reader will be distracted.",
    },
    {
      id: 3,
      image: service3,
      title: "Service Three",
      description:
        "Description for service three. It is a long established fact that a reader will be distracted.",
    },
  ];
  return (
    <main>
      {/* section-main-slider */}
      <section className="section-main-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          //   navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {slides.map((value, index) => (
            <SwiperSlide key={index}>
              {(index % 3) + 1 === 1 && (
                <div className="slide-item">
                  <div className="slide-item-content slideInFromLeft">
                    <h2>{value.title}</h2>
                    <p>{value.content}</p>
                    <ButtonDefault name="Read More" />
                  </div>
                  <div className="slide-item-image slideInFromRight">
                    <img src={value.image} alt={value.title} />
                  </div>
                </div>
              )}
              {(index % 3) + 1 === 2 && (
                <div className="slide-item">
                  <div className="slide-item-image slideInFromLeft">
                    <img src={value.image} alt={value.title} />
                  </div>
                  <div className="slide-item-content slideInFromRight ">
                    <h2>{value.title}</h2>
                    <p>{value.content}</p>
                    <ButtonDefault name="Read More" />
                  </div>
                </div>
              )}
              {(index % 3) + 1 === 3 && (
                <div className="slide-item-other">
                  <div className="slide-item-image slideInFromTop">
                    <img src={value.image} alt={value.title} />
                  </div>
                  <div className="slide-item-content slideInFromBottom ">
                    <h2>{value.title}</h2>
                    <p>{value.content}</p>
                    <ButtonDefault name="Read More" />
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* section-main-services */}
      <section className="section-main-services container">
        <TitleMain
          classMain="tittle-center"
          name="Main Services"
          title="Learn services to focus on your beauty"
          description={
            "Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
          }
        />
        <div className="card">
          {cardServices.map((value, index) => (
            <CardItem
              key={index}
              image={value.image}
              title={value.title}
              description={value.description}
              dataAos="slide-up"
              dataAosDelay={index * 200}
            />
          ))}
        </div>
      </section>
      <Bubble className={"bubbleRight"} bubble={bubbleRight}/>
      <section className="section-main-about contentAndImage container">
        <div className="content">
          <div className="content-top">
            <TitleMain
              classMain="tittle-left"
              name={"About Us"}
              title={"We are the best beauty clinic"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat."
              }
            />
          </div>
          <div className="content-bottom">
            <ButtonDefault name="Learn More" />
            <div className="btn-watch"
              data-fancybox="video"
              data-src="https://www.youtube.com/watch?v=jBMUFLgyFfY&list=RDjBMUFLgyFfY&start_radio=1&pp=oAcB"
            >
              <img src={playButton} alt="playButton" />
              <span>Watch Video</span>
            </div>
          </div>
        </div>
        <div className="image" data-aos="zoom-in" data-aos-duration="1500">
          <img src={serviceMain} alt="service" />
        </div>
      </section>
      <SectionTeams />
      <Bubble className={"bubbleLeft"} bubble={bubbleLeft}/>
      <SectionContact />
    </main>
  );
}
export default Home;
