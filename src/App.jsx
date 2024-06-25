import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./Components/Home and Other/ContactUs";
import Home from "./Components/Home and Other/Home";
import AboutUs from "./Components/Home and Other/AboutUs";
import Products from "./Components/Home and Other/Products";
import Pricings from "./Components/Home and Other/Pricings";
import TermsAndConditions from "./Components/Terms and Privacy/TermsAndConditions";
import PrivacyPolicy from "./Components/Terms and Privacy/PrivacyPolicy";
import useScrollToTop from "./Components/Header Footer/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollToTopWrapper>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Pricings" element={<Pricings />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </ScrollToTopWrapper>
    </Router>
  );
}

const ScrollToTopWrapper = ({ children }) => {
  useScrollToTop();
  return children;
};

export default App;