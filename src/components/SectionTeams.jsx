import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import CardItem from "./CardItem";
import TitleMain from "./TitleMain";
import team1 from "../assets/images/team1.PNG";
import team2 from "../assets/images/team2.PNG";
import team3 from "../assets/images/team3.PNG";
function SectionTeams() {
  const teams = [
    {
      id: 1,
      image: team1,
      name: "Surgeon",
      title: "Briyan Nevalli",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      id: 2,
      image: team2,
      name: "Dermatologist",
      title: "Bella sebastian",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      id: 3,
      image: team3,
      name: "Stylist expert",
      title: "Lilly Adams",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      id: 4,
      image: team1,
      name: "Surgeon",
      title: "Briyan Nevalli",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      id: 5,
      image: team2,
      name: "Dermatologist",
      title: "Bella sebastian",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
    {
      id: 6,
      image: team3,
      name: "Stylist expert",
      title: "Lilly Adams",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
      facebook: "https://www.facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  ];
  return (
    <section className="section-teams container">
      <TitleMain
        classMain="tittle-center"
        name="Professional Teams"
        title="The Professional expert"
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
        }
      />
      <div className="content">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          //   navigation
          // pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
        >
          {teams.map((value, index) => (
            <SwiperSlide key={index}>
              <CardItem
                image={value.image}
                name={value.name}
                title={value.title}
                description={value.description}
                facebook={value.facebook}
                twitter={value.twitter}
                instagram={value.instagram}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default SectionTeams;
