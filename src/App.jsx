import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./Components/Terms and Privacy/ContactUs";
import FooterEr from "./Components/Header Footer/FooterEr";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FooterEr />} />
        <Route path="/ContactUs" element={<ContactUs />} />

      </Routes>
    </Router>
  );
}

export default App;
