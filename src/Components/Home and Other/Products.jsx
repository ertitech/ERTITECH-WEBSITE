import React from 'react';
import HeaderEr from '../Header Footer/HeaderEr';
import Banner from '../Header Footer/Banner';
import FooterEr from '../Header Footer/FooterEr';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css'; 


const products = [
  {
    image: "https://i.postimg.cc/BvFFStCd/white-label.png",
    title: "White-label Solutions Payment platform",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/TYTJtjch/api.png",
    title: "API Solutions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/vZk9w55r/upi.png",
    title: "UPI PAYIN",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/qMmyQPRZ/payouts.png",
    title: "Payouts",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/P5PZ7Svf/subscriptions.png",
    title: "Subscriptions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/Rhdfk8Th/payment-link.png",
    title: "Payment link-based solutions",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/xTgyhks5/emi.png",
    title: "EMI's",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/FKkyYThC/fraud.png",
    title: "FRM (Fraud Risk Module)",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/QdygN2ZW/ertipay.png",
    title: "Ertipay BBPS",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    image: "https://i.postimg.cc/XJw98XGw/loanzsimpl.png",
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
      />
      <div className="container-fluid my-5 productcon">
        <div className="row">
          <h3 className="mb-5 text-center ">Our <span style={{ color: '#e44a20', fontWeight: 'bold',textDecoration:'underline' }}>Products</span></h3>
          {products.map((product, index) => (
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
            <div className="card">
              <div className="card-horizontal">
                <img src={product.image} className="card-img-left" alt={product.title} />
                <div className="card-body">
                  <div className="title-container">
                    <h5 className="card-title">{product.title}</h5>
                  </div>
                  <p className="card-text">{product.description}</p>
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
