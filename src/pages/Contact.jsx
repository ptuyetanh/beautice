import React from "react";
import TitleMain from "@/components/TitleMain";
import SectionContact from "@/components/SectionContact";
import Bubble from '@/components/Bubble';
import bubbleRight3 from "@/assets/images/bubbleRight3.svg";
import CardItem from '@/components/CardItem';
import maps from "@/assets/images/maps.svg";
import phone from "@/assets/images/phone.svg";
import mail from "@/assets/images/mail.svg";
function Contact() {
  return (
    <main>
      <section className="section-contact-title container contentAndImage">
        <TitleMain
          name={"Contact Us"}
          title={"Contact service for our customers"}
          classMain={"tittle-left"}
        />
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis
          </p>
        </div>
      </section>
      <Bubble className={"bubbleRight"} bubble={bubbleRight3}/>
      <SectionContact titleMain={false} />
      <section className="section-maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.95149221327!2d105.75902350914835!3d21.022801972233747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1762506854509!5m2!1svi!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
      <section className="section-connect container">
        <TitleMain 
          name={"Get in touch"} 
          title={"Get direct handling by us"} 
          classMain={"tittle-center"}
          description ={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis"}
        />
        <div className="card">
          <CardItem 
            image={maps} 
            name={"Address"}
            title={"123 Street, City, Country"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"}
            boxShadowNone = {'box-shadow-none'}
          />
          <CardItem 
            image={phone} 
            name={"Phone"}
            title={"+012 345 67890"} 
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"}
          />
          <CardItem 
            image={mail}
            name={"Email"}
            title={'mail@company.com'}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"}
            boxShadowNone = {'box-shadow-none'}
          />
        </div>
      </section>
    </main>
  );
}
export default Contact;
