import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const iconData = [
  { src: "https://i.postimg.cc/J0pgTKtz/White-label-Solutions-Payment-platform.png", alt: "White label Solutions Payment platform" },
  { src: "https://i.postimg.cc/13GXfNd3/API-Solutions.png", alt: "API Solutions" },
  { src: "https://i.postimg.cc/hGmkS9Z2/UPI-PAYIN.png", alt: "UPI PAYIN" },
  { src: "https://i.postimg.cc/sggfD05w/Payouts.png", alt: "Payouts" },
  { src: "https://i.postimg.cc/FsDmqgwc/Subscriptions.png", alt: "Subscriptions" },
  { src: "https://i.postimg.cc/SsMxb2c4/Payment link-based solutions.png", alt: "Payment link-based solutions" },
  { src: "https://i.postimg.cc/2yWbG904/emi.png", alt: "EMI" },
  { src: "https://i.postimg.cc/j5pCDQRC/Fraud Risk Module.png", alt: "Fraud Risk Module" },
  { src: "https://i.postimg.cc/Dyq4bDJh/Ertipay BBPS.png", alt: "Ertipay BBPS" },
  { src: "https://i.postimg.cc/fTjkb9pT/Loanzsimpl.png", alt: "Loanzsimpl" }
];

function HeaderIcon() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      // Initialize tooltips
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
      tooltipTriggerList.map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl));
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#f2f2f2" }} className="header-icon-container d-none d-md-flex justify-content-around p-2 my-1">
      {iconData.map((icon, index) => (
        <div key={index} className="icon-wrapper">
          <img
            src={icon.src}
            alt={icon.alt}
            className="header-icon img-fluid"
            data-toggle="tooltip"
            title={icon.alt} // Tooltip text
          />
          <div className="icon-text">{icon.alt}</div>
        </div>
      ))}
    </div>
  );
}

export default HeaderIcon;