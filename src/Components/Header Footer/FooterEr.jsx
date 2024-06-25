import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const FooterEr = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };
  return (
    <footer className="footer bg-light py-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div
              className="d-flex justify-content-center justify-content-lg-start align-items-center"
              style={{ height: "100px" }}
            >
              <img
                src="https://i.postimg.cc/xTNYpnxL/ertitech.png"
                alt="Logo"
                className="img-fluid lg-mb-3"
                style={{ maxHeight: "40px" }}
                onClick={navigateToHome}
              />
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="footer-links text-center mb-3">
              <Link to="/ContactUs" className="text-dark mx-2">
                Contact Us
              </Link>
              <span className="separator text-dark mx-2">|</span>
              <Link to="/TermsAndConditions" className="text-dark mx-2">
                Terms & Conditions
              </Link>
              <span className="separator text-dark mx-2">|</span>
              <Link to="/PrivacyPolicy" className="text-dark mx-2">
                Privacy Policy
              </Link>
            </div>
            <div className="footer-bottom text-center">
              <hr className="mb-3 footer-bottom" />

              <p className="text-dark text-center copyrighttext">
                &copy; 2022 Ertitech Solutions Pvt Ltd, All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="social-icons d-flex justify-content-center justify-content-lg-end align-items-center mb-3 social-icons">
              <a
                href="https://www.facebook.com/people/Ertitech/61560782950016"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/85FLDjdy/facebook.png"
                  alt="Facebook"
                  className="img-fluid me-2 socialicon"
                />
              </a>
              <a
                href="https://www.instagram.com/ertitech/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/5NmYhBd4/instagram.png"
                  alt="Instagram"
                  className="img-fluid mx-2 socialicon"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/ertitech-solutions-private-limited/people/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/ZqWWvX9n/linked-in.png"
                  alt="LinkedIn"
                  className="img-fluid mx-2 socialicon"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=8122686806&text=YOUR_MESSAGE"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i.postimg.cc/65BTf87D/whatsapp.png"
                  alt="WhatsApp"
                  className="img-fluid mx-2 socialicon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterEr;