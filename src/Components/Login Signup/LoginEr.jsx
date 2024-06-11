import React from "react";
// import "./LoginEr.css";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginEr = () => {
  return (
    <div className="container-fluid p-0">

      <div className="row" style={{ backgroundColor: "#fea805" }}>
       
        <div className="col-6 d-flex flex-column justify-content-center align-items-start position-relative">
          <div className="fw-bold fs-3 ms-4 ps-4">Login</div>
          <span className="fs-5 ms-4 mt-1 ps-4">
            Home &gt; Sign in to your Account
          </span>
        </div>
        <div className="col-6 d-flex flex-column justify-content-end align-items-end position-relative">
          <img
            src="https://i.postimg.cc/7ZRfd9j8/banner-strip.png"
            alt="Banner Image"
            className="img-fluid"
            style={{ width: "25%" }} 
          />
        </div>
      </div>

        <div className="row" >
          <div
            className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center align-items-center"
            style={{ border: "2px solid #000" }}
          >
            <img
              src="https://i.postimg.cc/y8RH6Tkz/img.png"
              alt="Login Illustration"
              className="loginimage"
              style={{ maxWidth: "90%", height: "90%" }} 
            />
          </div>
          <div
            className="col-lg-7 col-md-7 col-sm-12 p-5 d-flex flex-column align-items-center "
            style={{ border: "2px solid #000" }}
          >
            <div className="fs-4">Login to Your </div>
            <div className="fs-2 fw-bold mt-1 mb-3">Ertitech Account</div>

            <form
              className="login-form d-flex p-2 flex-column align-items-center"
              style={{ border: "2px solid #000", width: "100%" }}
            >
              <div className="form-group w-100">
                <input
                  type="email"
                  className="form-control inputbox"
                  placeholder="Email ID"
                />
              </div>
              <div className="form-group ">
                <button className="btn sendbtn">Send OTP</button>
              </div>
              <div class="form-group d-flex align-items-center w-80 mb-3">
                <input
                  type="text"
                  class="form-control me-2"
                  placeholder="Enter OTP"
                />
                <button class="btn verifybtn w-100">Verify OTP</button>
              </div>

              <div className="form-group w-100">
                <input
                  type="password"
                  className="form-control inputbox"
                  placeholder="Password"
                />
              </div>

              <button className="btn mainbtn1 m-2">Login</button>
              <div className="mb-2 fw-bold fs-6">Forgot Password ?</div>

              <div className="w-100 d-flex justify-content-center align-items-center">
                <span>New to Ertitech ? </span>
                <button class="btn mainbtn2 ms-4">Signup</button>

              </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default LoginEr;
