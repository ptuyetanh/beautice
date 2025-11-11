import React from "react";
import TitleMain from "./TitleMain";
import contact from "@/assets/images/contact.svg";
import { toast } from "react-toastify";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  firstname: z.string().min(1, "Please enter your firstname"),
  lastname: z.string().min(1, "Please enter your lastname"),
  email: z
    .string()
    .min(1, "Please enter email address")
    .email("Please enter a valid email address"),
  subject: z.string().min(1, "Please enter a subject"),
  inquiry: z.string().min(1, "Please enter content of inquiry"),
});
function SectionContact({ titleMain }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      subject: "",
      inquiry: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Send successfully", {
      position: "top-right",
    });
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

        <form
          className="form-contact"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="form-fullname">
            <div className="form-group">
              <input
                type="text"
                placeholder=""
                autoComplete="firstname"
                {...register("firstname")}
                aria-invalid={!!errors.firstname || undefined}
                aria-describedby="firstnameHelp"
              />
              <label htmlFor={"firstname"}>First Name</label>
              <small id="firstnameHelp" className="form-text">
                {errors.firstname?.message}
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder=""
                autoComplete="lastname"
                {...register("lastname")}
                aria-invalid={!!errors.lastname || undefined}
                aria-describedby="lastnameHelp"
              />
              <label htmlFor={"lastname"}>Last Name</label>
              <small id="lastnameHelp" className="form-text">
                {errors.lastname?.message}
              </small>
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder=""
              autoComplete="email"
              {...register("email")}
              aria-invalid={!!errors.email || undefined}
              aria-describedby="emailHelp"
            />
            <label htmlFor={"email"}>Email Address</label>
            <small id="emailHelp" className="form-text">
              {errors.email?.message}
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder=""
              autoComplete="subject"
              {...register("subject")}
              aria-invalid={!!errors.subject || undefined}
              aria-describedby="subjectHelp"
            />
            <label htmlFor={"subject"}>Subject Message</label>
            <small id="subjectHelp" className="form-text">
              {errors.subject?.message}
            </small>
          </div>
          <div className="form-group-textarea">
            <textarea
              rows={4}
              placeholder=""
              autoComplete="inquiry"
              {...register("inquiry")}
              aria-invalid={!!errors.inquiry || undefined}
              aria-describedby="inquiryHelp"
            ></textarea>
            <label htmlFor="inquiry">Your inquiry here</label>
            <small id="inquiryHelp" className="form-text">
              {errors.inquiry?.message}
            </small>
          </div>
          <button className="btn-default" disabled={isSubmitting}>
            {isSubmitting ? "Sending message" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
export default SectionContact;
