import React from 'react';
import HeaderEr from '../Header Footer/HeaderEr';
import Banner from '../Header Footer/Banner';
import FooterEr from '../Header Footer/FooterEr';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
  return (
    <>
      <HeaderEr />
      <Banner
        title="Contact Us"
        belowText="Home &gt; Contact Informations"
        imageSrc="https://i.postimg.cc/T2SZh4x0/contact-top-banner-strip.png"
      />
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4">
            <h2 className="contact-text-brick-red fw-bold mb-4 ">Ertitech Solutions Pvt Ltd</h2>
            <p className="contact-text">If you have any feedback about Ertitech, feel free to contact us!</p>
            <p className="contact-text">(Monday-Friday; 10am – 6pm local timings)</p>
            <p className="contact-text">Send us an Email - <a className="contact-text-brick-red conemail fw-bold" href="mailto:hello@ertitech.com">hello@ertitech.com</a></p>
            <p className="contact-text">Message us on WhatsApp - <a className="contact-text-brick-red conno fw-bold" href="tel:+918122686806">+91 81226 86806</a></p>
          </div>
          <div className="col-lg-6 col-12">
            <div className="card p-4">
              <h3 className="contact-text-brick-red fw-bold mb-4 contact-heading">Leave A Message</h3>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control contact-input" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control contact-input" id="email" placeholder="Email ID" />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control contact-input" id="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control contact-input" id="subject" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea className="form-control contact-input" id="message" rows="4" placeholder="Message"></textarea>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn text-center contact-btn-brick-red mt-3">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterEr />
    </>
  );
}

export default ContactUs;