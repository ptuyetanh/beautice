import React, { useState } from "react";
import TitleMain from "./TitleMain";
import contact from "@/assets/images/contact.svg";
import ButtonDefault from "./ButtonDefault";
import InputForm from "./InputForm";
import { toast } from "react-toastify";

function SectionContact({ titleMain }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    inquiry: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    inquiry: "",
  });

  const validateFields = (value) => {
    if (!value.trim()) return "Vui lòng nhập nội dung";
    return "";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstnameError = validateFields(form.firstname);
    const lastnameError = validateFields(form.lastname);
    const emailError = validateFields(form.email);
    const subjectError = validateFields(form.subject);
    const inquiryError = validateFields(form.inquiry);
    setErrors({ firstname: firstnameError, lastname: lastnameError, email: emailError, subject: subjectError, inquiry: inquiryError });
    if (!firstnameError && !lastnameError && !emailError && !subjectError && !inquiryError) {
      toast.success("Send successfully", {
        position: "top-right",
      });
    }
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
              handleChange={handleChange}
              value={form.firstname}
              label={"First Name"}
              errors={errors.firstname}
            />
            <InputForm
              type={"text"}
              name={"lastname"}
              handleChange={handleChange}
              value={form.lastname}
              label={"Last Name"}
              errors={errors.lastname}
            />
          </div>
          <InputForm
            type={"email"}
            name={"email"}
            handleChange={handleChange}
            value={form.email}
            label={"Email Address"}
            errors={errors.email}
          />
          <InputForm
            type={"text"}
            name={"subject"}
            handleChange={handleChange}
            value={form.subject}
            label={"Subject Message"}
            errors={errors.subject}
          />
          <div className="form-group-textarea">
            <textarea
              rows={4}
              placeholder=""
              name="inquiry"
              value={form.inquiry}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <label htmlFor="inquiry">Your inquiry here</label>
            <small id="helpId" className="form-text">
              {errors.inquiry}
            </small>
          </div>
          <ButtonDefault name="Send Message" handleSubmit={handleSubmit} />
        </form>
      </div>
    </section>
  );
}
export default SectionContact;
