import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({ title, belowText }) => {
  return (
    <div className="banner-container d-flex align-items-center " style={{ backgroundColor: "rgba(169,169,169,0.5)", height: '150px' }}>
      <div className="text-container-fluid d-flex flex-column text-center">
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{title}</div>
        <span style={{ fontSize: '1rem',marginTop:'5px' }}>{belowText}</span>
      </div>
    </div>
  );
}; 

export default Banner;