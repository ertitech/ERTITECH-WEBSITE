import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginEr from "./Components/Login Signup/LoginEr";
import SignupEr from "./Components/Login Signup/SignupEr";
import ForgotEr from "./Components/Login Signup/ForgotEr";
import HeaderEr from "./Components/Header Footer/HeaderEr";
import Banner from "./Components/Header Footer/Banner";
import ContactUs from "./Components/Terms and Privacy/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="/Login" element={<LoginEr />} />
        <Route path="/Signup" element={<SignupEr />} />
        <Route path="/Forgot" element={<ForgotEr />} />
      </Routes>
    </Router>
  );
}

export default App;
