import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pricings.css";
import HeaderEr from "../Header Footer/HeaderEr";
import FooterEr from "../Header Footer/FooterEr";
import Banner from "../Header Footer/Banner";
import { useNavigate } from "react-router-dom";

function Pricings() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const navigate=useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContactUs = () => {
    navigate('/ContactUs');
  };
  const mobileStandardList = (
    <>
      <li className="list-group-item">One Time set-up fee: 2999/-</li>
      <li className="list-group-item">AMC: 1999/-</li>
      <li className="list-group-item">Credit Cards: 2.00%</li>
      <li className="list-group-item">Debit Cards: 1.50%</li>
      <li className="list-group-item">Net Banking: 2.00%</li>
      <li className="list-group-item">UPI (platform fee): 1.00%</li>
      <li className="list-group-item">Wallet: 2.00%</li>
      <li className="list-group-item">EMI: 2.00%</li>
      <li className="list-group-item">International Cards: 3.00%</li>
      <li className="list-group-item">Subscriptions: 2.00%</li>
    </>
  );

  const mobileEliteList = (
    <>
      <li className="list-group-item">One Time set-up fee: 4999/-</li>
      <li className="list-group-item">AMC: 1999/-</li>
      <li className="list-group-item">Credit Cards: 1.85%</li>
      <li className="list-group-item">Debit Cards: 1.00%</li>
      <li className="list-group-item">Net Banking: 1.85%</li>
      <li className="list-group-item">UPI (platform fee): 1.00%</li>
      <li className="list-group-item">Wallet: 1.85%</li>
      <li className="list-group-item">EMI: 1.85%</li>
      <li className="list-group-item">International Cards: 2.85%</li>
      <li className="list-group-item">Subscriptions: 1.85%</li>
    </>
  );

  const standardList = (
    <>
      <li className="list-group-item">2999/-</li>
      <li className="list-group-item">1999/-</li>
      <li className="list-group-item">2.00%</li>
      <li className="list-group-item">1.50%</li>
      <li className="list-group-item">2.00%</li>
      <li className="list-group-item">1.00%</li>
      <li className="list-group-item">2.00%</li>
      <li className="list-group-item">2.00%</li>
      <li className="list-group-item">3.00%</li>
      <li className="list-group-item">2.00%</li>
    </>
  );

  const eliteList = (
    <>
      <li className="list-group-item">4999/-</li>
      <li className="list-group-item">1999/-</li>
      <li className="list-group-item">1.85%</li>
      <li className="list-group-item">1.00%</li>
      <li className="list-group-item">1.85%</li>
      <li className="list-group-item">1.00%</li>
      <li className="list-group-item">1.85%</li>
      <li className="list-group-item">1.85%</li>
      <li className="list-group-item">2.85%</li>
      <li className="list-group-item">1.85%</li>
    </>
  );
  useEffect(() => {
    // Animation logic using anime.js
    var textWrapper = document.querySelector('.ml6 .letters');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: true })
        .add({
          targets: '.ml6 .letter',
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 50 * i
        }).add({
          targets: '.ml6',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }
    return () => {
      anime.timeline().pause();
    };
  }, []);
  return (
    <>
      <HeaderEr />
      <Banner
        title="Pricings"
        belowText="Home &gt;Pricings Informations"
      />
      <div className="container my-5 ">
        <h3 className="text-center title-price">Payment Gateway
 <span className="ml6">
 <span class="text-wrapper">
    <span class="letters" style={{color:'#e44a20'}}> Fees Structure</span>
  </span>
 </span>
</h3>

        <div className="row">
          {!isMobile && (
            <div className="col-md-4">
              <div className="card card-price">
                <div className="card-body">
                  <div className="card-svg">
                    <h5 className="title" >PAYMENT MODE</h5>
                    <svg
                      width="180%"
                      height="200%"
                      viewBox="0 0 1440 490"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition duration-300 ease-in-out delay-150"
                    >
                      <defs>
                      <linearGradient id="payment-gradient"  
                        x1="29%"
                        y1="5%"
                        x2="71%"
                        y2="95%">
                        <stop offset="0%" style={{ stopColor: 'orange' }} />
                        <stop offset="100%" style={{ stopColor: 'red' }} />
                      </linearGradient>
                      </defs>
                      <path
                        d="M 0,500 L 0,187 C 92.98717948717947,175.05897435897435 185.97435897435895,163.11794871794874 261,181 C 336.02564102564105,198.88205128205126 393.08974358974365,246.58717948717947 476,259 C 558.9102564102564,271.41282051282053 667.6666666666666,248.53333333333336 742,250 C 816.3333333333334,251.46666666666664 856.24358974359,277.2794871794872 936,262 C 1015.75641025641,246.7205128205128 1135.3589743589741,190.34871794871793 1226,171 C 1316.6410256410259,151.65128205128207 1378.320512820513,169.32564102564103 1440,187 L 1440,500 L 0,500 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="url(#payment-gradient)"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                        transform="rotate(-180 720 250)"
                      ></path>
                    </svg>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">One Time set-up fee</li>
                    <li className="list-group-item">AMC</li>
                    <li className="list-group-item">Credit Cards</li>
                    <li className="list-group-item">Debit Cards</li>
                    <li className="list-group-item">Net Banking</li>
                    <li className="list-group-item">UPI (platform fee)</li>
                    <li className="list-group-item">Wallet</li>
                    <li className="list-group-item">EMI</li>
                    <li className="list-group-item">International Cards</li>
                    <li className="list-group-item">Subscriptions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className={isMobile ? "col-12 col-md-6 mb-4" : "col-md-4"}>
            <div className="card card-price">
              <div className="card-body">
                <div className="card-svg">
                  <h5 className="title">ERTI STANDARD *</h5>
                  <svg
                    width="180%"
                    height="200%"
                    viewBox="0 0 1440 490"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300 ease-in-out delay-150"
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="29%"
                        y1="5%"
                        x2="71%"
                        y2="95%"
                      >
                        <stop offset="5%" stopColor="#0693e3"></stop>
                        <stop offset="95%" stopColor="#9900ef"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,500 L 0,187 C 92.98717948717947,175.05897435897435 185.97435897435895,163.11794871794874 261,181 C 336.02564102564105,198.88205128205126 393.08974358974365,246.58717948717947 476,259 C 558.9102564102564,271.41282051282053 667.6666666666666,248.53333333333336 742,250 C 816.3333333333334,251.46666666666664 856.24358974359,277.2794871794872 936,262 C 1015.75641025641,246.7205128205128 1135.3589743589741,190.34871794871793 1226,171 C 1316.6410256410259,151.65128205128207 1378.320512820513,169.32564102564103 1440,187 L 1440,500 L 0,500 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="url(#gradient)"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                        transform="rotate(-180 720 250)"
                      ></path>
                    </svg>
                  </div>
                  <ul className="list-group list-group-flush">
                    {isMobile ? mobileStandardList : standardList}
                  </ul>
                </div>
              </div>
            </div>

            <div className={isMobile ? "col-12 col-md-6" : "col-md-4"}>
              <div className="card card-price">
                <div className="card-body">
                  <div className="card-svg">
                    <h5 className="title">ERTI ELITE *</h5>
                    <svg
                      width="180%"
                      height="200%"
                      viewBox="0 0 1440 490"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition duration-300 ease-in-out delay-150"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="29%"
                          y1="5%"
                          x2="71%"
                          y2="95%"
                        >
                          <stop offset="5%" stopColor="#0693e3"></stop>
                          <stop offset="95%" stopColor="#9900ef"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0,500 L 0,187 C 92.98717948717947,175.05897435897435 185.97435897435895,163.11794871794874 261,181 C 336.02564102564105,198.88205128205126 393.08974358974365,246.58717948717947 476,259 C 558.9102564102564,271.41282051282053 667.6666666666666,248.53333333333336 742,250 C 816.3333333333334,251.46666666666664 856.24358974359,277.2794871794872 936,262 C 1015.75641025641,246.7205128205128 1135.3589743589741,190.34871794871793 1226,171 C 1316.6410256410259,151.65128205128207 1378.320512820513,169.32564102564103 1440,187 L 1440,500 L 0,500 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="url(#gradient)"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                        transform="rotate(-180 720 250)"
                      ></path>
                    </svg>
                  </div>
                  <ul className="list-group list-group-flush">
                    {isMobile ? mobileEliteList : eliteList}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
       <p className="mt-4"><span style={{color:'red'}}>*</span> Tax extra as applicable</p>
        </div>
       <div className="d-flex">
       <img
        type="button"
        src="https://i.postimg.cc/9f9260Sr/larger.png"
        alt=""
        className="img-fluid mx-auto img-price"
        onClick={handleContactUs}
      />
       </div>
      <FooterEr />
    </>
  );
}

export default Pricings;
