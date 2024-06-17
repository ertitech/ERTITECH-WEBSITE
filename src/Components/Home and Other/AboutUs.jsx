import React from "react";
import HeaderEr from "../Header Footer/HeaderEr";
import Banner from "../Header Footer/Banner";
import FooterEr from "../Header Footer/FooterEr";
import "./AboutUs.css";
import { FaStar } from "react-icons/fa";

function AboutUs() {
  return (
    <>
      <HeaderEr />
      <Banner
        title="About Us"
        belowText="Home &gt; Our Informations"
        imageSrc="https://i.postimg.cc/Bb2jR2Kz/top-banner-strip.png"
      />
      <div className="about-us my-5 container-fluid section-content d-flex flex-wrap ">
        <div className=" m-0 section-content d-flex flex-wrap ">
          <div className="col-md-7">
            <h3 className="mb-4 text-start ">
              About
              <span style={{ color: "#e44a20", fontWeight: "bold" }}>
                {" "}
                Ertitech Solutions Pvt Ltd
              </span>
            </h3>
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
          <div className="col-md-5 justify-content-center d-flex">
            <img
              src="https://i.postimg.cc/FRWp75Cv/abt.png"
              alt="Payment Orchestration"
              className="img-fluid blueimg"
            />
          </div>
        </div>
      </div>

      <div className="about-us1 my-0">
        <div className="section-content1 ps-5">
          <div className="section-item1 ">
            <img
              src="https://i.postimg.cc/L56mCHH8/icon.png"
              alt="Icon"
              className="section-icon1"
            />
            <div className="section-content1-text">
              <h5 className="section-title1">Payment Orchestration</h5>
              <p>
                Our extensive payment orchestration platform seamlessly links
                merchants with an extensive network of payment service
                providers, acquirers, and alternative payment methods, offering
                unparalleled adaptability and selection. Whether you are
                operating online, in-store, or on mobile devices, our platform
                enables you to optimize your payment procedures and propel
                business expansion.
              </p>
            </div>
          </div>
          <div className="section-item1 m-0">
            <img
              src="https://i.postimg.cc/L56mCHH8/icon.png"
              alt="Icon"
              className="section-icon1"
            />
            <div className="section-content1-text">
              <h5 className="section-title1">Security Protocols</h5>

              <p>
                What distinguishes us is our unwavering dedication to delivering
                an exceptional user experience. From simplified integration
                processes to robust security protocols, we prioritize the
                requirements of our clients and their customers at every turn.
              </p>
              <br />
              <p>
                Join the ranks of industry-leading enterprises that rely on
                Erittech for their payment processing needs and witness the
                distinction firsthand.
              </p>
              <br />
              <p>
                Welcome to the forefront of fintech with Erittech Solutions
                Private Limited!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="about-us my-5 container-fluid">
        <div class="team-info">
          <h4 class="section-title">Meet Our Team</h4>
          <div class="row">
            <div class="team-member mb-4">
              <div class="icon">
                <img
                  src="https://i.postimg.cc/5ttn12pg/founder.png"
                  alt="Founder"
                  class="img-fluid"
                />
              </div>
              <div class="text">
                <div class="title1">Our Founder</div>
                <p className="meetpara">
                  An ardent and committed specialist with more than two decades
                  of experience in Banking and Fintech since 2004, exemplifying
                  a strong business acumen.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="team-member mb-4">
              <div class="icon">
                <img
                  src="https://i.postimg.cc/4d9vN7c6/registered-address.png"
                  alt="Founder"
                  class="img-fluid"
                />
              </div>
              <div class="text">
                <div class="title1">Registered Address</div>
                <p className="meetpara">
                  Erittech Solutions Pvt Ltd, No-7, G1, Bharathiyar Street,
                  Prashanti Nagar, Chromepet, Chennai – 600 044, Tamilnadu,
                  India.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="team-member">
              <div class="icon">
                <img
                  src="https://i.postimg.cc/XN5xnhKR/headquarters.png"
                  alt="Founder"
                  class="img-fluid"
                />
              </div>
              <div class="text">
                <div class="title1">Business Headquarters</div>
                <p className="meetpara">
                  Erittech Solutions Pvt Ltd, Old.no.111, New.no.525, Radha
                  Towers, 2nd Floor, Narayanapillai Street, Salem – 636 007,
                  Tamilnadu, India.
                </p>
                <p style={{ fontWeight: "500" }}>CIN - U72900TN2022PTC148971</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us1 ">
        <div className="section-content1 ">
          <div className="testimonials px-5 ">
            <div className="mb-4 fs-4">
              What Our <span class="section-title1 ">Customers Say</span>
            </div>

            <div className="row px-3">
              <div className="col-md-4 aboutcard-testimonial px-5">
                <div className="card aboutcard-card">
                  <div className="aboutcard-card-body">
                    <div className="aboutcard-stars m-3 d-flex justify-content-center">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          color="#ffd700"
                          className="me-2"
                          size={25}
                        />
                      ))}
                    </div>
                    <h5 className="about-card-title mb-4">
                      Great Fast Reliable Service
                    </h5>
                    <p className="mb-5 text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                  <div className="aboutcard-card-footer">
                    <div>Clients Name Here</div>
                    <div>Clients Designation</div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 aboutcard-testimonial px-5">
                <div className="card aboutcard-card">
                  <div className="aboutcard-card-body">
                    <div className="aboutcard-stars m-3 d-flex justify-content-center">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          color="#ffd700"
                          className="me-2"
                          size={25}
                        />
                      ))}
                    </div>
                    <h5 className="about-card-title mb-4">
                      Great Fast Reliable Service
                    </h5>
                    <p className="mb-5 text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                  <div className="aboutcard-card-footer">
                    <div>Clients Name Here</div>
                    <div>Clients Designation</div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 aboutcard-testimonial px-5">
                <div className="card aboutcard-card">
                  <div className="aboutcard-card-body">
                    <div className="aboutcard-stars m-3 d-flex justify-content-center">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          color="#ffd700"
                          className="me-2"
                          size={25}
                        />
                      ))}
                    </div>
                    <h5 className="about-card-title mb-4">
                      Great Fast Reliable Service
                    </h5>
                    <p className="mb-5 text-center">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                  <div className="aboutcard-card-footer">
                    <div>Clients Name Here</div>
                    <div>Clients Designation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterEr />
    </>
  );
}

export default AboutUs;
