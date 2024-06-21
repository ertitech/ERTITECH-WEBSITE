import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Pricings.css";
import HeaderEr from "../Header Footer/HeaderEr";
import FooterEr from "../Header Footer/FooterEr";

function Pricings() {
  return (
    <>
      <HeaderEr />
      <div className="container my-5">
        <h2 className="text-center mb-4">Pricing</h2>
        <div className="text-center mb-4">
          <span>Home &gt; Our Pricing Lists</span>
        </div>
        <h3 className="text-center mb-4">Payment Gateway Fees Structure</h3>

        <div className="row">
          <div className="col-md-4">
            <div className="card card-price">
              <div className="card-body">
                <div className="card-svg">
                  <h5 className="title">PAYMENT MODE</h5>
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

          <div className="col-md-4">
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
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
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
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center my-5">
          <div>
            <h4>FOR LARGER ENTERPRISES</h4>
            <p>
              Get a dedicated Account manager, Custom Pricing for your business
              and a lot more
            </p>
            <hr />
            <button className="btn btn-primary">CONTACT US</button>
          </div>
        </div>
      </div>
      <FooterEr />
    </>
  );
}

export default Pricings;