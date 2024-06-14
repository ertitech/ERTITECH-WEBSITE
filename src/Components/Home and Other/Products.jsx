import React from 'react';
import HeaderEr from '../Header Footer/HeaderEr';
import Banner from '../Header Footer/Banner';
import FooterEr from '../Header Footer/FooterEr';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pricings.css'; // Create a CSS file for custom styling

const products = [
  {
    image: "https://i.postimg.cc/9MfjHqf1/White-label-Solutions-Payment-platform.png",
    title: "White-label Solutions Payment platform",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/vHnwyyQR/API-Solutions.png",
    title: "API Solutions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/cJCNVnCh/UPI-PAYIN.png",
    title: "UPI PAYIN",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/zGfMB1NX/Payouts.png",
    title: "Payouts",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/TwjQ0kx4/Subscriptions.png",
    title: "Subscriptions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/5NKgsQcb/Payment-link-based-solutions.png",
    title: "Payment link-based solutions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/xCPyMcyr/emi.png",
    title: "EMI's",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/ZKnFvYWg/Fraud-Risk-Module.png",
    title: "FRM (Fraud Risk Module)",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/1XjFr68d/Ertipay-BBPS.png",
    title: "Ertipay BBPS",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/wjJND1gW/Loanzsimpl.png",
    title: "Loanzsimpl",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  }
];

function Products() {
  return (
    <>
      <HeaderEr />
      <Banner
        title="Products"
        belowText="Home &gt; Product Informations"
        imageSrc="https://i.postimg.cc/rF1ZgwVp/top-banner-strip.png"
      />
      <div className="container-fluid my-5 productcon">
        <div className="row">
          <h4 className="mb-4 text-start ">Our<span style={{ color: '#e44a20', fontWeight: 'bold' }}> Products</span></h4>
          {products.map((product, index) => (
            <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-6 mb-2 px-4 py-3 "  >

              <div className="card">
                <div className="card-horizontal" >
                  <div className='imgcon ms-3'>
                     <img src={product.image} className="card-img-left mx-2" alt={product.title} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <hr className='my-1'/>
                    <p className="card-text">{product.description}</p>
                    <button className='btn readbtn'>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterEr />
    </>
  );
}

export default Products;
