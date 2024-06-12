import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ContactUs from "./Components/Terms and Privacy/ContactUs";
import FooterEr from "./Components/Header Footer/FooterEr";
import Home from "./Components/Home and Other/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/footer" element={<FooterEr />} />
        <Route path="/ContactUs" element={<ContactUs />} />
          <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
