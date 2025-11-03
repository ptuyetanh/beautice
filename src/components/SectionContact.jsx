import React, { useState } from "react";
import TitleMain from "./TitleMain";
import contact from "@/assets/images/contact.svg";
import ButtonDefault from "./ButtonDefault";

function SectionContact() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "subject":
        setSubject(value);
        break;
      case "inquiry":
        setInquiry(value);
        break;
      default:
        break;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`First Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nSubject: ${subject}\nInquiry: ${inquiry}`);

  };
  return (
    <section className="section-contact container contentAndImage">
      <div className="image">
        <img src={contact} alt="contact" />
      </div>
      <div className="content">
        <TitleMain
          classMain="tittle-left"
          name="Contact Us"
          title="Send your inquiry to our expert team"
          description={"Lorem ipsum dolor sit amet nulla turapis tellus."}
        />
        <form className="form-contact">
          <div className="form-group">
            <input type="text" placeholder="First Name" name="firstname" onChange={(e) => onChange(e)}/>
            <input type="text" placeholder="Last Name" name="lastname" onChange={(e) => onChange(e)}/>
          </div>
          <input type="email" placeholder="Email address" name="email" onChange={(e) => onChange(e)}/>
          <input type="text" placeholder="Subject message" name ='subject' onChange={(e) => onChange(e)}/>
          <textarea rows={4} placeholder="Your inquiry here" name="inquiry" onChange={(e) => onChange(e)}></textarea>
          <ButtonDefault name="Send Message" handleSubmit={handleSubmit} />
        </form>
      </div>
    </section>
  );
}
export default SectionContact;
