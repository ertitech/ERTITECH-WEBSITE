import React from "react";
import "../../App.css";
import HeaderEr from "../Header Footer/HeaderEr";
import HeaderIcon from "../Header Footer/HeaderIcon";
import FooterEr from "../Header Footer/FooterEr";

const Home = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  };

  return (
    <div className="container-f">
      <HeaderEr />
      <HeaderIcon />
      <div className="container-home">
        <div className="row home" >
          <div className="col-md-6 ">
            <h2 className="font-md-small">
              Streamlining Payments - <br />
              Ertitech's{" "}
              <span style={{ color: "#e44a20" }}> Unified Interface</span>
              <br /> for Merchants
            </h2>
            <p className="mt-4 mb-4 three-lines fst-italic fs-5">
              Robust Security Measures Safeguarding Sensitive Payment Data
              Across Every Channel
            </p>
            <div className="d-flex flex-wrap">
              <div className="d-flex align-items-center p-2 col-6">
                <img
                  src="https://i.postimg.cc/j5CFky0x/secure.png"
                  alt="100% Secure"
                  className="icon me-2"
                />
                <p className="icon-word mb-1 fw-bold">100% Secure</p>
              </div>
              <div className="d-flex align-items-center p-2 col-6">
                <img
                  src="https://i.postimg.cc/2yhTPwHD/user-friendly.png"
                  alt="User Friendly"
                  className="icon me-2"
                />
                <p className="icon-word mb-1 fw-bold">User Friendly</p>
              </div>
              <div className="d-flex align-items-center p-2 col-6">
                <img
                  src="https://i.postimg.cc/X79DhVhC/trust-pay.png"
                  alt="Trust Pay"
                  className="icon me-2"
                />
                <p className="mb-2 icon-word fw-bold">Trust Pay</p>
              </div>
              <div className="d-flex align-items-center p-2 col-6">
                <img
                  src="https://i.postimg.cc/6pytn4TX/best-support.png"
                  alt="Best Support"
                  className="icon me-2"
                />
                <p className="mb-2 icon-word fw-bold">Best Support</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 home-img-container">
            <img
              src="https://i.postimg.cc/rwFzbpmn/a1.png"
              alt="Payment Orchestration"
              className="img-fluid home-img d-none d-md-block"
            />
          </div>
        </div>
        <div className="row" style={{ margin: "0 -3%"}}>
          <div className="bg-orange">
            <img src="/ertitech.gif" alt="Animated GIF" className="mt-5 mb-5"/>
          </div>
        </div>

        <div className="row home">
          <div className="col-md-6">
            <h4>Welcome to <br /> <span style={{ color: "#e44a20" }}>Ertitech Solutions Pvt Ltd</span></h4>
            <p style={{color:'darkgrey',fontWeight:'600'}}>Complete Solution for Payment</p>
          </div>
          <div className="col-md-6">
            <p style={{lineHeight:'30px'}}>
              {" "}
              Ertitech functions as a payment orchestration platform that connects merchants to multiple PSPs, acquirers, and payment partners, allowing them to manage everything from a single interface.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://i.postimg.cc/8cNT6yfK/a2.png"
              alt="Erittech Solutions"
              className="d-none d-md-block botton-home-img"
            />
          </div>
          <div className="col-md-6">
            <div style={containerStyle}>
              <img src="https://i.postimg.cc/1zbj2f9D/a1.png" alt="Payment Platform Support"  className="icon imgStyle"/>
              <p>Our payment platform supports transactions across various platforms, ensuring a consistent and unified payment experience for customers regardless of how they choose to make a payment.</p>
            </div>
            <div style={containerStyle}>
              <img src="https://i.postimg.cc/QNQyY8vW/a2.png" alt="Business Integration Benefits"  className="icon imgStyle"/>
              <p>Integrating with us benefits your business by allowing you to operate with a single platform to manage all transactions, regardless of the channel they originate from.</p>
            </div>
            <div style={containerStyle}>
              <img src="https://i.postimg.cc/HkhZ8V8F/a3.png" alt="Strong Security Measures" className="icon imgStyle"/>
              <p>We have developed the platform with strong security measures to protect sensitive payment information across all channels.</p>
            </div>
          </div>
        </div>
    <div class="row vertical-line-container">
      <div class="col-md-6 vertical-line-column">
        <h4>Why Choose <span>Ertitech</span></h4>
        <p>
          Our Payment Orchestration Model enables businesses to streamline
          their payment processes, lower expenses, bolster security, and
          deliver an exceptional customer experience.
        </p>
      </div>
    
      <div class="col-md-6 vertical-line-column">
        <h4>Our <span>Vision</span></h4>
        <p>
          Our vision is to establish a distinctive brand providing a
          comprehensive digital payment solution with an enhanced customer
          experience.
        </p>
      </div>
    </div>
      </div>
      <FooterEr />
    </div>
  );
};

export default Home;