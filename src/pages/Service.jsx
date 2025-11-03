import React, { useState } from "react";
import serviceLeft from "../assets/images/serviceLeft.png";
import serviceRight from "../assets/images/serviceRight.png";
import TitleMain from "../components/TitleMain";
import serviceLeft2 from "../assets/images/serviceLeft2.png";
import serviceRight2 from "../assets/images/serviceRight2.png";
import bubbleBG from "../assets/images/bubbleBG.svg";
import Bubble from "../components/Bubble";
import SectionDetail from "../components/SectionDetail";
import angleDoubleRight from "../assets/images/angleDoubleRight.svg";
import animation1 from "../assets/images/animation1.png";
import animation2 from "../assets/images/animation2.png";
import animation3 from "../assets/images/animation3.png";
import SectionSlogan from "../components/SectionSlogan";
import slogan2 from "../assets/images/slogan2.png";
import angleUp from "../assets/images/angleUp.svg";
import angleDown from "../assets/images/angleDown.svg";
import useAos from "../customHook/useAos";

function Service() {
  useAos();
  const imageService = [
    {
      imageLeft: serviceLeft,
      imageRight: serviceRight,
    },
    {
      imageLeft: serviceLeft2,
      imageRight: serviceRight2,
    },
  ];
  const detail = [
    {
      name: "Beauty Consultation",
      title: "We services beauty consultation",
      description:
        "Our beauty clinic offers a wide range of services to help you look and feel your best. From skincare treatments to body contouring, our experienced team is dedicated to providing personalized care tailored to your unique needs.",
      image: animation1,
    },
    {
      name: "Skin Treatements",
      title: "Skin care and treatment by expert",
      description:
        "Our beauty clinic offers a wide range of services to help you look and feel your best. From skincare treatments to body contouring, our experienced team is dedicated to providing personalized care tailored to your unique needs.",
      image: animation2,
    },
    {
      name: "Beauty Product",
      title: "We present quality beauty products",
      description:
        "Our beauty clinic offers a wide range of services to help you look and feel your best. From skincare treatments to body contouring, our experienced team is dedicated to providing personalized care tailored to your unique needs.",
      image: animation3,
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
          button={
            <button className="btn-appoinment">
              <span>Make an Appointment</span>
              <img src={angleDoubleRight} alt="angleDoubleRight" />
            </button>
          }
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
          button={
            <button className="btn-appoinment">
              <span>Make an Appointment</span>
              <img src={angleDoubleRight} alt="angleDoubleRight" />
            </button>
          }
          dataAosLeft="fade-left"
          dataAosRight="fade-right"
          dataAosDelay={index * 200}
        />
      )
    );
  };
  const faq = [
    {
      title: "Is beauty consultation handled thoroughly?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    },
    {
      title: "Can I be beautiful in an instant time?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    },
    {
      title:
        "Are there any side effects to the treatment methods or treatments at this clinic?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    },
    {
      title: "Do professionals have accreditation in their respective fields?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
    },
  ];
  const [active, setActive] = useState(0);
  const handleTitle = (index) => {
    setActive(active === index ? null : index);
  };
  return (
    <main>
      <Bubble className={"bubbleCenter"} bubble={bubbleBG} />
      <section className="section-service-image container">
        <div className="content-top">
          <TitleMain
            classMain={"tittle-center"}
            name={"Our Services"}
            title="We focus on your beauty"
            description="Lorem ipsum dolor sit amet"
          />
        </div>
        {imageService.map((item, index) =>
          index % 2 === 0 ? (
            <div
              className="content-bottom"
              key={index}
            >
              <div className="image-left"
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
              >
                <img src={item.imageLeft} alt="service" />
              </div>
              <div className="image-right"
              data-aos="zoom-in-up"
              data-aos-delay={index * 300}
              >
                <img src={item.imageRight} alt="service" />
              </div>
            </div>
          ) : (
            <div
              className="content-bottom"
              key={index}
            >
              <div className="image-right"
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
              >
                <img src={item.imageRight} alt="service" />
              </div>
              <div className="image-left"
              data-aos="zoom-in-up"
              data-aos-delay={index * 300}
              >
                <img src={item.imageLeft} alt="service" />
              </div>
            </div>
          )
        )}
      </section>
      {showDetail()}
      <SectionSlogan
        slogan={slogan2}
        name={"Business Slogan"}
        title={"Best responsibility and service for our customers"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"
        }
        linkVideo={
          "https://www.youtube.com/watch?v=pc1qcZ30wC8&list=RDpc1qcZ30wC8&start_radio=1&pp=oAcB"
        }
      />
      <section className="section-faq container">
        <TitleMain
          classMain={"tittle-center center-2"}
          title="Services FAQ’s"
        />

        <div className="content">
          {faq.map((value, index) => (
            <div className="faq-item" key={index}>
              <div
                className={`title ${active === index ? "active" : ""}`}
                onClick={() => handleTitle(index)}
              >
                <h3>{value.title}</h3>
                {active === index ? (
                  <img src={angleUp} alt="" />
                ) : (
                  <img src={angleDown} alt="" />
                )}
              </div>
              <div
                className={`description ${
                  active === index ? "show" : "hidden"
                } `}
              >
                <p>{value.description}</p>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis aut quibusdam ut, hic soluta mollitia voluptate obcaecati impedit autem iste eum fuga delectus fugiat et tenetur! Sunt, perferendis sapiente.</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
export default Service;
