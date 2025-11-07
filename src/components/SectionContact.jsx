import React, { useState } from "react";
import TitleMain from "./TitleMain";
import contact from "@/assets/images/contact.svg";
import ButtonDefault from "./ButtonDefault";
import InputForm from "./InputForm";

function SectionContact({ titleMain }) {
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
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `First Name: ${firstname}\nLast Name: ${lastname}\nEmail: ${email}\nSubject: ${subject}\nInquiry: ${inquiry}`
    );
  };
  return (
    <section className="section-contact container contentAndImage">
      <div className="image">
        <img src={contact} alt="contact" />
      </div>
      <div className="content">
        {titleMain === true ? (
          <TitleMain
            classMain="tittle-left"
            name="Contact Us"
            title="Send your inquiry to our expert team"
            description={"Lorem ipsum dolor sit amet nulla turapis tellus."}
          />
        ) : null}

        <form className="form-contact">
          <div className="form-fullname">
            <InputForm
              type={"text"}
              name={"firstname"}
              onChange={onChange}
              label={"First Name"}
            />
            <InputForm
              type={"text"}
              name={"lastname"}
              onChange={onChange}
              label={"Last Name"}
            />
          </div>
          <InputForm
            type={"email"}
            name={"email"}
            onChange={onChange}
            label={"Email Address"}
          />
          <InputForm
            type={"text"}
            name={"subject"}
            onChange={onChange}
            label={"Subject Message"}
          />
          <div className="form-group-textarea">
            <textarea
              rows={4}
              placeholder=""
              name="inquiry"
              onChange={(e) => onChange(e)}
            ></textarea>
            <label for="inquiry">Your inquiry here</label>
          </div>
          <ButtonDefault name="Send Message" handleSubmit={handleSubmit} />
        </form>
      </div>
    </section>
  );
}
export default SectionContact;
