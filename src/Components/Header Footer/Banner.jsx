import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = ({ title, belowText, imageSrc }) => {
  return (
    <div className="banner-container d-flex align-items-center " style={{ backgroundColor: "#fea805", height: '150px' }}>
      <div className="text-container-fluid d-flex flex-column">
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{title}</div>
        <span style={{ fontSize: '1rem',marginTop:'5px' }}>{belowText}</span>
      </div>
      <div className="banner-image">
        <img
          src={imageSrc}
          alt="Banner Image"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default Banner;
