import React, { useState, useEffect } from "react";
import "../../App.css";
import HeaderEr from "../Header Footer/HeaderEr";
import FooterEr from "../Header Footer/FooterEr";
import gif1 from "/gif1.gif";
import gif2 from "/gif2.gif";
import gif3 from "/gif3.gif";
import gif4 from "/gif4.gif";

const contentData = [
  {
    keyword: "Ertipay-APP",
    image: "./ertipay-banner.png",
  },
  {
    keyword: "Loan Simplz App",
    image: "./loan-simplz-banner.png",
  },
  {
    keyword: "Payout",
    image: "./payout-banner.png",
  },
];

const Home = () => {
  const [selectedContent, setSelectedContent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateContent();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const rotateContent = () => {
    setSelectedContent((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const { keyword, image } = contentData[selectedContent];
  const [hoveredProductIndex, setHoveredProductIndex] = useState(null);

  const handleProductMouseEnter = (index) => {
    setHoveredProductIndex(index);
  };

  const handleProductMouseLeave = () => {
    setHoveredProductIndex(null);
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      img: "https://i.postimg.cc/VvG2zwKp/safe-and-secure.png",
      text: "Safe & Secure",
    },
    { img: "https://i.postimg.cc/v83Jr7Gh/assure-pay.png", text: "Reliable" },
    { img: "https://i.postimg.cc/9F0vJ4Mh/support.png", text: "Support" },
    {
      img: "https://i.postimg.cc/wTrnP6ys/user-friendly.png",
      text: "User Friendly",
    },
  ];

  const gifPaths = [gif1, gif2, gif3, gif4];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [animationClass, setAnimationClass] = useState('');
  const [imageAnimationClass, setImageAnimationClass] = useState('image-fade-in-scale');

  useEffect(() => {
    setAnimationClass('keyword-animation');

    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 1000);

    return () => clearTimeout(timer);
  }, [keyword]);

  useEffect(() => {
    setImageAnimationClass('image-fade-out-scale');

    const timer = setTimeout(() => {
      setImageAnimationClass('image-fade-in-scale');
    }, 500);

    return () => clearTimeout(timer);
  }, [image]);

  const products = [
    { img: "https://i.postimg.cc/tgpkvf5x/api.png", text: "API Solutions" },
    { img: "https://i.postimg.cc/W3f734PG/emi.png", text: "EMI’s" },
    {
      img: "https://i.postimg.cc/J7v9YrBH/erti-pay-bbps.png",
      text: "Ertipay BBPS",
    },
    {
      img: "https://i.postimg.cc/pLt3xsC2/fraud-risk.png",
      text: "Fraud Risk Module",
    },
    { img: "https://i.postimg.cc/HLYK8jFR/loan-simpl.png", text: "Loanzsimpl" },
    {
      img: "https://i.postimg.cc/43W06sgd/payment-link.png",
      text: "Payment link-based solutions",
    },
    { img: "https://i.postimg.cc/FR1BG8rx/payouts.png", text: "Payouts" },
    {
      img: "https://i.postimg.cc/cCn5G38g/subscriptions.png",
      text: "Subscriptions",
    },
    { img: "https://i.postimg.cc/tCFmrhj8/upi-payin.png", text: "UPI PAYIN" },
    {
      img: "https://i.postimg.cc/VkRZwm5R/white-label.png",
      text: "White label Solutions Payment platform",
    },
  ];

  const affiliations = [
    "https://i.postimg.cc/k5KCwrBd/1.png",
    "https://i.postimg.cc/k4CmpjbR/2.png",
    "https://i.postimg.cc/qRGTV8sb/3.png",
    "https://i.postimg.cc/sxDRVvKV/4.png",
    "https://i.postimg.cc/wMfY3gbD/5.png",
    "https://i.postimg.cc/qMqdS6zw/6.png",
    "https://i.postimg.cc/HsNCgWMg/7.png",
    "https://i.postimg.cc/0yJ12gGJ/8.png",
    "https://i.postimg.cc/Tw0ZHTxB/9.png",
    "https://i.postimg.cc/8CV9p7Pq/10.png",
    "https://i.postimg.cc/bvHMsqZd/11.png",
    "https://i.postimg.cc/G2LfD6DK/12.png",
  ];

  return (
    <div className="container-f">
      <HeaderEr />
      <div className="home-banner">
        <div className="background-shapes"></div>
        <section className="home-con">
          <div className="col-md-6 home-content">
            <div className="text-wrapper">
              <h2 className="font-md-small">
                Streamlining Payments - Ertitech's Unified Interface <br />
                <span className={animationClass} style={{ color: 'red' }}>
                  for {keyword}
                </span>
              </h2>
              <p className="fst-italic mt-md-5 fs-5 size-small">
                Robust Security Measures Safeguarding Sensitive Payment Data
                Across Every Channel
              </p>
            </div>
          </div>
          <div className="col-md-6 home-content d-none d-md-block">
            <img
              src={image}
              alt={`${keyword}-banner`}
              style={{ width: '65%', height: 'auto' }}
              className={imageAnimationClass}
            />
          </div>
        </section>
      </div>
      <section className="gif-container" style={{ height: "400px" }}>
        <h3 className="text-center mb-lg-5 mb-md-3 mb-sm-2 fw-bolder">
          Ertitech <span style={{color:'#e44a20'}}>Smart Routing Solutions</span>
        </h3>
  <div className="d-flex h-100">
    <img 
      src="./ertitech smart.gif" 
      alt="" 
      className="mx-auto" 
      style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} 
    />
  </div>
</section>
      <section className="features-container">
        <h3 className="text-center whyerti1">
          Why <span className="whyerti2">Ertitech ?</span>
        </h3>
        <p className="text-center feature-text">
          Our Payment Orchestration Model enables businesses to streamline their
          payment processes, lower expenses, bolster security, and deliver an
          exceptional customer experience.
        </p>
        <div className="row justify-content-center iconcon">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-6 col-md-3 col-sm-6 text-center feature-icon-container"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="icon-wrapper">
                <img
                  src={feature.img}
                  alt={feature.text}
                  className="feature-icon"
                  style={{ display: hoveredIndex === index ? "none" : "block" }}
                />
                <img
                  src={gifPaths[index]}
                  alt={feature.text}
                  className="feature-gif"
                  style={{ display: hoveredIndex === index ? "block" : "none" }}
                />
              </div>
              <p className="featurecaption">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="products-container">
        <h3 className="text-center whyerti1 mb-5" style={{ color: "black" }}>
          Our{" "}
          <span className="whyerti2" style={{ color: "#e44a20" }}>
            Products
          </span>
        </h3>

        <div className="row justify-content-center iconcon1">
          {products.map((product, index) => (
            <div
              key={index}
              className={`col-6 col-md-3 text-center product-icon-container ${
                hoveredProductIndex === index ? "product-hover" : ""
              }`}
              onMouseEnter={() => handleProductMouseEnter(index)}
              onMouseLeave={handleProductMouseLeave}
            >
              <img
                src={product.img}
                alt={product.text}
                className="product-icon"
              />
              <p className="size-resmall">{product.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="affiliations-container">
        <h3 className="text-center whyerti1 mb-5" style={{ color: "black" }}>
          Our{" "}
          <span className="whyerti2" style={{ color: "#e44a20" }}>
            Affiliations
          </span>
        </h3>
        <div className="iconcon2">
          {affiliations.map((affiliation, index) => (
            <div
              key={index}
              className={`col-4 col-md-3 text-center dotted-col ${
                index % 4 !== 3 ? "border-right" : ""
              } ${index < 8 ? "border-bottom" : ""}`}
            >
              <div className="affiliation-icon-wrapper">
                <img
                  src={affiliation}
                  alt={`Affiliation ${index + 1}`}
                  className="affiliation-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterEr />
    </div>
  );
};

export default Home;