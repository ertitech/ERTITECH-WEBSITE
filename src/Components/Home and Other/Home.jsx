import React from "react";
import "../../App.css";
import HeaderEr from "../Header Footer/HeaderEr";
import FooterEr from "../Header Footer/FooterEr";

const Home = () => {
  return (
    <div className="container-f">
      <HeaderEr />
      <section className="home-con">
  <div className="col-md-6 home-content">
    <div className="text-wrapper">
      <h2 className="font-md-small">
        Streamlining Payments - <br />
        Ertitech's{" "}
         Unified Interface
        <br /> <span style={{ color: "#e44a20" }}>for Merchants</span>
      </h2>
      <p className="fst-italic mt-md-5 fs-5 size-small">
        Robust Security Measures Safeguarding Sensitive Payment Data Across Every
        Channel
      </p>
    </div>
  </div>
  <div className="col-md-6 home-content d-none d-md-block">
    <img
      src="./merchant-banner.png"
      alt="merchant-banner"
      style={{ width: "65%", height: "auto"}}
    />
  </div>
</section>

      <FooterEr />
    </div>
  );
};

export default Home;