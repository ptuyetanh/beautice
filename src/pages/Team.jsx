import React from "react";
import SectionTeams from "@/components/SectionTeams";
import TitleMain from "@/components/TitleMain";
import team4 from "@/assets/images/team4.png";
import team5 from "@/assets/images/team5.png";
import team6 from "@/assets/images/team6.png";
import SectionSlogan from "@/components/SectionSlogan";
import teamSlogan from "@/assets/images/teamSlogan.png";
import rate1 from "@/assets/images/rate1.png";
import star from "@/assets/images/star.svg";
import starNo from "@/assets/images/starNo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import prevIcon from "@/assets/images/prevIcon.svg";
import nextIcon from "@/assets/images/nextIcon.svg";
import Bubble from '@/components/Bubble';
import linesLeft from '@/assets/images/linesLeft.png';
import linesRight from '@/assets/images/linesRight.png';

function Team() {
  const teamsDetails = [
    {
      id: 1,
      name: "Sarah Taylor",
      position: "Assistance Nurse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
      image: team4,
    },
    {
      id: 2,
      name: "John Doe",
      position: "Senior Doctor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
      image: team5,
    },
    {
      id: 3,
      name: "Emily Smith",
      position: "Pediatrician",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.",
      image: team6,
    },
  ];
  const ourTestimonials = [
    {
      id: 1,
      image: rate1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum provident quaerat molestias libero quia itaque molestiae temporibus ipsum accusantium nemo dolorem, dolorum consequuntur id harum quidem quos ullam saepe?",
      rating: 4,
    },
    {
      id: 2,
      image: rate1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum provident quaerat molestias libero quia itaque molestiae temporibus ipsum accusantium nemo dolorem, dolorum consequuntur id harum quidem quos ullam saepe?",
      rating: 5,
    },
    {
      id: 3,
      image: rate1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum provident quaerat molestias libero quia itaque molestiae temporibus ipsum accusantium nemo dolorem, dolorum consequuntur id harum quidem quos ullam saepe?",
      rating: 3,
    },
  ];
  const showStars = (rating) => {
    if (rating < 0 || rating > 5) return null;

    return (
      <div className="star">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={i < rating ? star : starNo} alt={`star-${i}`} />
        ))}
      </div>
    );
  };

  return (
    <main>
      <SectionTeams className={"pages-team"} />
      <section className="sectionAssistance container">
        <TitleMain
          classMain={"tittle-center"}
          name={"Assistance Team"}
          title={"Meet the pro assistance"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          }
        />
        {teamsDetails.map((team) => (
          <div className="content">
            <div className="image">
              <img src={team.image} alt="" />
            </div>
            <div className="desc">
              <div className="name">
                <h3>{team.name}</h3>
                <span>{team.position}</span>
              </div>
              <div className="describe">
                <p>{team.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <SectionSlogan
        slogan={teamSlogan}
        title={"Customer satisfaction is our main goal"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        }
      />
      <Bubble className={"bubbleLeft lines"} bubble={linesLeft}/>
      <section className="section-ourTestimonials container">
        <TitleMain
          classMain={"tittle-center"}
          name={"Our Testimonials"}
          title={"What our customer says"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam."
          }
        />
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          // pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {ourTestimonials.map((value) => (
            <SwiperSlide>
              <div className="content">
                <div className="cardRate">
                  <div className="image">
                    <img src={value.image} alt="" />
                  </div>
                  <div className="desc">
                    <p>{value.description}</p>
                  </div>
                  {showStars(value.rating)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-prev">
          <img src={prevIcon} alt="Prev" />
        </div>
        <div className="custom-next">
          <img src={nextIcon} alt="Next" />
        </div>
      </section>
      <Bubble className={"bubbleRight"} bubble={linesRight}/>
    </main>
  );
}

export default Team;
