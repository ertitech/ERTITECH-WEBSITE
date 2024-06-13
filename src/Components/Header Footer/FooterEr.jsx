import React from 'react';
import { Link } from 'react-router-dom';

const FooterEr = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
              <img
                src="https://i.postimg.cc/xTNYpnxL/ertitech.png"
                alt="Logo"
                className="img-fluid mb-3"
                style={{ maxHeight: '40px' }}
              />
            </div>
            <div className="social-icons d-flex justify-content-center justify-content-lg-start mb-3">
              <a href="#"><img src="https://i.postimg.cc/85FLDjdy/facebook.png" alt="Facebook" className="img-fluid me-2" style={{ maxHeight: '30px' }} /></a>
              <a href="#"><img src="https://i.postimg.cc/5NmYhBd4/instagram.png" alt="Instagram" className="img-fluid mx-2" style={{ maxHeight: '30px' }} /></a>
              <a href="#"><img src="https://i.postimg.cc/ZqWWvX9n/linked-in.png" alt="LinkedIn" className="img-fluid mx-2" style={{ maxHeight: '30px' }} /></a>
              <a href="#"><img src="https://i.postimg.cc/65BTf87D/whatsapp.png" alt="WhatsApp" className="img-fluid mx-2" style={{ maxHeight: '30px' }} /></a>
            </div>
          </div>

          <div className="col-lg-8 col-md-8">
            <div className="footer-links text-center mb-3">
              <Link to="/ContactUs" className="text-dark mx-2">Contact Us</Link>
              <span className="separator text-dark mx-2">|</span>
              <Link to="/TermsAndConditions" className="text-dark mx-2">Terms & Conditions</Link>
              <span className="separator text-dark mx-2">|</span>
              <Link to="/PrivacyPolicy" className="text-dark mx-2">Privacy Policy</Link>
            </div>
            <div className="footer-bottom text-center text-lg-end">
              <hr className="mb-3" />
              <p className="text-dark mb-0 text-center copyrighttext">
                &copy; 2022 Ertitech Solutions Pvt Ltd, All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-12">
            <p className="text-dark m-3 text-center footertext" style={{ textAlign: 'justify' }}>
              Ertitech Services in India are functioned by Ertitech Solutions Pvt Ltd (CIN - U72900TN2022PTC148971) (GSTN - 33AAGCE8342L1ZF) & Ertitech Services in Georgia are functioned by Ertitech Solutions LLC (Registration No - 406340623). All the users are advised to read our Terms & Conditions carefully.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEr;
