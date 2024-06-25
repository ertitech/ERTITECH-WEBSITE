import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";
import Banner from "../Header Footer/Banner";
import HeaderEr from "../Header Footer/HeaderEr";
import FooterEr from "../Header Footer/FooterEr";

function AboutUs() {
  return (
    <>
      <HeaderEr />
      <Banner title="About Us" belowText="Home &gt; Our Informations" />
      <div className="about-us my-5 container-fluid section-content d-flex flex-wrap align-items-center p-0">
        <h3 className="mb-4 aboutheading text-center mx-auto">
          About{" "}
          <span
            style={{
              color: "#e44a20",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Ertitech Solutions Pvt Ltd
          </span>
        </h3>

        <div className="m-0 section-content d-flex flex-wrap align-items-center w-100">
          <div className="col-md-7 col-sm-12">
            <div>
              Ertitech Solutions Private Limited, an innovative leader in the
              domain of digital payment solutions. We are transforming the
              landscape of how businesses handle transactions and interact with
              customers with our state-of-the-art payment gateway technology.
            </div>
            <div>
              <br />
              We are specialized in payment orchestration – a dynamic approach
              to payment processing that optimizes transaction routes, minimizes
              costs, and enhances the overall payment experience for businesses
              and their customers.
            </div>
          </div>
          <div className="col-md-5 justify-content-center d-flex p-0">
            <img
              src="https://i.postimg.cc/FRWp75Cv/abt.png"
              alt="Payment Orchestration"
              className="img-fluid blueimg"
            />
          </div>
        </div>
      </div>

      <div className="row paymentcon w-100 m-0">
        <div className="col-md-6 p-0">
          <img
            src="https://i.postimg.cc/pXy3xd5Z/payment-orchestration.jpg"
            alt="Payment Orchestration"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className="col-md-6 order-md-1 d-flex flex-column justify-content-center px-5 mx-auto"
          style={{ maxWidth: "45%", color: "white" }}
        >
          <h3>
            Payment{" "}
            <span className="fw-bold text-decoration-underline">
              Orchestration
            </span>
          </h3>
          <p>
            Our extensive payment orchestration platform seamlessly integrates
            with the modern framework of payment service providers, ensuring
            businesses enjoy reduced payment costs, optimized routing, and
            enhanced payment experiences. Be it online, in-store, or mobile
            payments, our platform is designed to optimize your payment
            processes and propel business success.
          </p>
        </div>
      </div>

      <div className="row securitycon w-100 m-0">
        <div
          className="col-md-6 d-flex flex-column justify-content-center px-5 mx-auto"
          style={{ width: "40%", color: "white" }}
        >
          <h3>
            Security{" "}
            <span className="fw-bold text-decoration-underline">Protocols</span>
          </h3>
          <p>
            What distinguishes us is our unwavering dedication to delivering
            exceptional payment security. From simplified integration processes
            to robust security protocols. <br />
            <br />
            <br /> we prioritize the requirements of our clients and their
            customers at every turn.
          </p>
        </div>
        <div className="col-md-6 p-0">
          <img
            src="https://i.postimg.cc/g2Z5XBDL/security-protocols.jpg"
            alt="Security Protocols"
            className="img-fluid middleimg w-100 h-100"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>


      <div className="row joincon w-100 m-0 px-5">
        <div className="col-md-4 py-5 ps-5 d-flex justify-content-start">
          <img
            src="https://i.postimg.cc/JhCFbc66/join-us-icon.png"
            alt="Join Us Icon"
            className="img-fluid"
            style={{ objectFit: "cover" ,maxWidth:'70%'}}
          />
        </div>
        <div
          className="col-md-8 py-5 pe-5 d-flex flex-column justify-content-center "
          style={{ color: "black", fontWeight: "500" }}
        >
          <p>
            Join the ranks of industry-leading enterprises that rely on Ertitech
            for their payment processing needs and witness the distinction
            firsthand.
          </p>
          <br />
          <p>
            Welcome to the forefront of fintech with Ertitech Solutions Private
            Limited!
          </p>
        </div>
      </div>

      <div className="row my-5 py-5">
        <div className="col-md-4 ps-5">
          <img
            src="https://i.postimg.cc/6391P6NC/founder.png"
            alt="Founder"
            className="img-fluid ps-5"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <div className="col-md-8 d-flex flex-column justify-content-center pe-5">
          <h3>
            Our{" "}
            <span
              className="fw-bold text-decoration-underline"
              style={{ color: "#e44a20" }}
            >
              Founder
            </span>
          </h3>
          <p>
            An ardent and determined specialist with more than two decades of
            experience in Banking and Fintech since 2004, exemplifying a strong
            business acumen.
          </p>
        </div>
      </div>

      <div className="testimonial-banner container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5 col-sm-12 text-center">
            <div className="testimonial-image">
              <img
                src="https://i.postimg.cc/4yy2J8yd/testimonial.png"
                alt="Client"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 col-sm-12">
            <div className="testimonial-content p-4">
              <h3>
                What our <span className="highlight">Clients Say</span>
              </h3>
              <p className="testimonial-text">
                <i className="fas fa-quote-left mr-2"></i>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
                <i className="fas fa-quote-right ml-2"></i>
              </p>
              <p className="client-name"> - Client's Name</p>
            </div>
          </div>
        </div>
      </div>

      <FooterEr />
    </>
  );
}

export default AboutUs;