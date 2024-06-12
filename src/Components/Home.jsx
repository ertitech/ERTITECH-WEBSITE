import React from 'react';
import '../App.css'
import HeaderEr from './Header Footer/HeaderEr';
import HeaderIcon from './Header Footer/HeaderIcon';
import FooterEr from './Header Footer/FooterEr';


const Home = () => {
  return (
    <div className="container-f">
        <HeaderEr/>
        <HeaderIcon/>
      <div className='container'>
      <div className="row">
        <div className="col-md-6">
          <h2 className="mt-4 font-md-small">Streamlining Payments - Ertitech's <br /> <span style={{color:'#e44a20'}}> Unified Interface</span><br /> for Merchants</h2>
          <p>Robust Security Measures Safeguarding Sensitive Payment Data Across Every Channel</p>
          <div className="d-flex flex-wrap">
            <div className="d-flex align-items-center p-2 col-6">
              <img src="https://i.postimg.cc/j5CFky0x/secure.png" alt="100% Secure" className="icon me-2" />
              <p className="mb-0">100% Secure</p>
            </div>
            <div className="d-flex align-items-center p-2 col-6">
              <img src="https://i.postimg.cc/2yhTPwHD/user-friendly.png" alt="User Friendly" className="icon me-2" />
              <p className="mb-0">User Friendly</p>
            </div>
            <div className="d-flex align-items-center p-2 col-6">
              <img src="https://i.postimg.cc/X79DhVhC/trust-pay.png" alt="Trust Pay" className="icon me-2" />
              <p className="mb-0">Trust Pay</p>
            </div>
            <div className="d-flex align-items-center p-2 col-6">
              <img src="https://i.postimg.cc/6pytn4TX/best-support.png" alt="Best Support" className="icon me-2" />
              <p className="mb-0">Best Support</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src="https://i.postimg.cc/rwFzbpmn/a1.png" alt="Payment Orchestration" className="img-fluid"/>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-12 text-center bg-orange py-3">
          <h2>Payment Orchestration</h2>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6">
          <h3>Welcome to Erittech Solutions Pvt Ltd</h3>
          <p>Complete Solution for Payment</p>
          <p>
            Erittech functions as a payment orchestration platform that connects merchants to multiple PSPs, acquirers, and payment partners, allowing them to manage everything from a single interface.
          </p>
          <ul>
            <li>Our payment platform supports transactions across various platforms, ensuring a consistent and unified payment experience for customers regardless of how they choose to make a payment.</li>
            <li>Integrating with us benefits your business by allowing you to operate with a single platform to manage all transactions, regardless of the channel they originate from.</li>
            <li>We have developed the platform with strong security measures to protect sensitive payment information across all channels.</li>
          </ul>
        </div>
        <div className="col-md-6">
          <img src="https://i.postimg.cc/8cNT6yfK/a2.png" alt="Erittech Solutions" className="img-fluid"/>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-6 text-center">
          <h4>Why Choose Erittech</h4>
          <p>Our Payment Orchestration Model enables businesses to streamline their payment processes, lower expenses, bolster security, and deliver an exceptional customer experience.</p>
        </div>
        <div className="col-md-6 text-center">
          <h4>Our Vision</h4>
          <p>Our vision is to establish a distinctive brand providing a comprehensive digital payment solution with an enhanced customer experience.</p>
        </div>
      </div>
      </div>
      <FooterEr/>
    </div>
  );
};

export default Home;