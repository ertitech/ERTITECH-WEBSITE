import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const iconData = [
  { src: "https://i.postimg.cc/J0pgTKtz/White-label-Solutions-Payment-platform.png", alt: "White label Solutions Payment platform" },
  { src: "https://i.postimg.cc/13GXfNd3/API-Solutions.png", alt: "API Solutions" },
  { src: "https://i.postimg.cc/hGmkS9Z2/UPI-PAYIN.png", alt: "UPI PAYIN" },
  { src: "https://i.postimg.cc/sggfD05w/Payouts.png", alt: "Payouts" },
  { src: "https://i.postimg.cc/FsDmqgwc/Subscriptions.png", alt: "Subscriptions" },
  { src: "https://i.postimg.cc/SsMxb2c4/Payment-link-based-solutions.png", alt: "Payment link-based solutions" },
  { src: "https://i.postimg.cc/2yWbG904/emi.png", alt: "EMI" },
  { src: "https://i.postimg.cc/j5pCDQRC/Fraud-Risk-Module.png", alt: "Fraud Risk Module" },
  { src: "https://i.postimg.cc/Dyq4bDJh/Ertipay-BBPS.png", alt: "Ertipay BBPS" },
  { src: "https://i.postimg.cc/fTjkb9pT/Loanzsimpl.png", alt: "Loanzsimpl" }
];

function HeaderIcon() {
  return (
   
          <div style={{ backgroundColor: "#f2f2f2" }} className="header-icon-container d-none d-md-flex justify-content-around p-2 m-1">
            {iconData.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className="header-icon img-fluid" />
            ))}
          </div>
       
      );
}

export default HeaderIcon;