import React, { useState, useRef } from "react";
import HeaderEr from "../Header Footer/HeaderEr";
import Banner from "../Header Footer/Banner";
import FooterEr from "../Header Footer/FooterEr";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setFormData({
        ...formData,
        phone: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_izynuaw",
        "template_qw11szn",
        formRef.current,
        "xq-RZ0Sb8gGZ0P5Qf"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <>
      <HeaderEr />
      <Banner
        title="Contact Us"
        belowText="Home &gt; Contact Informations"
        imageSrc="https://i.postimg.cc/T2SZh4x0/contact-top-banner-strip.png"
      />
      <div className="contactcon container-fluid my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12 mb-4">
            <h2 className="contact-text-brick-red fw-bold mb-4 text-center">
              Ertitech Solutions Pvt Ltd
            </h2>
            <p className="contact-text text-center">
              If you have any feedback about Ertitech, feel free to contact us!
            </p>
            <p className="contact-text text-center">
              (Monday-Friday; 10am – 6pm local timings)
            </p>
            <p className="contact-text text-center">
              Send us an Email -{" "}
              <a
                className="contact-text-brick-red conemail fw-bold"
                href="mailto:hello@ertitech.com"
              >
                hello@ertitech.com
              </a>
            </p>
            <p className="contact-text text-center">
              Message us on WhatsApp -{" "}
              <a
                className="contact-text-brick-red conno fw-bold"
                href="tel:+918122686806"
              >
                +91 81226 86806
              </a>
            </p>

            <div className="text-center mt-4">
              <img
                src="https://i.postimg.cc/k4pVy2q2/contact.png"
                alt="Contact"
                style={{ maxWidth: "50%" }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-start">
            <div
              className="card h-100 p-4"
              style={{
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                width: "100%",
                maxWidth: "77%",
              }}
            >
              <h3 className="contact-text-brick-red fw-bold mb-4 contact-heading text-center">
                Leave A Message
              </h3>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control contact-input"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control contact-input"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    maxLength={10}
                    minLength={10}
                    inputMode="numeric"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control contact-input"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control contact-input"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn text-center contact-btn-brick-red mt-3"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterEr />
      <ToastContainer />
    </>
  );
}

export default ContactUs;
