import React, { useState, useRef } from "react";
import HeaderEr from "../Header Footer/HeaderEr";
import Banner from "../Header Footer/Banner";
import FooterEr from "../Header Footer/FooterEr";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactUs.css";

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
      <Banner title="Contact Us" belowText="Home &gt; Contact Informations" />
      <div className="contactcon container-fluid my-5">
        <div className="row align-items-center mx-4">
          <div className="col-lg-6 col-12 mb-4">
            <h3 className="contact-text-brick-red fw-bold mb-4 text-center text-md-center text-lg-start">
              Ertitech Solutions Pvt Ltd
            </h3>
            <p className="contact-text text-center text-md-center text-lg-start">
              If you have any feedback about Ertitech, feel free to contact us!
            </p>
            <p className="contact-text text-center text-md-center text-lg-start">
              (Monday-Friday; 10am – 6pm local timings)
            </p>
            <p className="contact-text text-center text-md-center text-lg-start">
              {" "}
              Send us an Email -{" "}
              <a
                className="contact-text-brick-red conemail"
                style={{ fontWeight: "500" }}
                href="mailto:hello@ertitech.com"
              >
                hello@ertitech.com
              </a>
            </p>
            <p className="contact-text text-center text-md-center text-lg-start">
              Message us on WhatsApp -{" "}
              <a
                className="contact-text-brick-red conno "
                style={{ fontWeight: "500" }}
                href="tel:+918122686806"
              >
                +91 81226 86806
              </a>
            </p>

            <div className="text-center text-md-center text-lg-start mt-4 ">
              <img
                src="https://i.postimg.cc/zD7NZ9dS/contact-us.png"
                alt="Contact"
                style={{ maxWidth: "80%" }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-12 d-flex justify-content-center leavemsgcon">
            <div
              className="card h-100 p-4 contact-card"
              style={{
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
              }}
            >
              <h4 className=" fw-bold mb-4 contact-heading">Leave A Message</h4>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group row d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control contact-input col me-3"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    className="form-control contact-input col"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form-group row d-flex justify-content-center">
                  <input
                    type="tel"
                    className="form-control contact-input col me-3"
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
                  <input
                    type="text"
                    className="form-control contact-input col"
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
                    className="form-control contact-input1"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ width: "100%" }}
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

      <div className="address-container my-5 mx-2">
        <div className="row m-0 w-100">
          <div className="column">
            <div className="address-item">
              <img
                src="https://i.postimg.cc/4d9vN7c6/registered-address.png"
                alt="Registered Address Icon"
                className="address-icon"
              />
              <div className="address-text">
                <h3>Registered Address</h3>
                <p>
                  Ertitech Solutions Pvt Ltd, No-7, G1, Bharathiyar Street,
                  Prashanti Nagar, Chromepet, Chennai – 600 044, Tamilnadu,
                  India.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="address-item">
              <img
                src="https://i.postimg.cc/XN5xnhKR/headquarters.png"
                alt="Business Headquarters Icon"
                className="address-icon"
              />
              <div className="address-text">
                <h3>Business Headquarters</h3>
                <p>
                  Ertitech Solutions Pvt Ltd, Old.no.111, New.no.525, Radha
                  Towers, 2nd Floor, Narayanapillai Street, Salem – 636 007,
                  Tamilnadu, India.
                </p>
                <p style={{ fontWeight: "500" }}>CIN - U72900TN2022PTC148971</p>
              </div>
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