import React from 'react';
import HeaderEr from '../Header Footer/HeaderEr';
import Banner from '../Header Footer/Banner';
import FooterEr from '../Header Footer/FooterEr';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css'; 
import { Helmet } from 'react-helmet';

const products = [
  {
    image: "https://i.postimg.cc/BvFFStCd/white-label.png",
    title: "White-label Solutions Payment platform",
    description: "Our white-label solutions payment platform offers customizable payment processing services, tailored to meet your business needs seamlessly."
  },
  {
    image: "https://i.postimg.cc/TYTJtjch/api.png",
    title: "API Solutions",
    description: "Explore our API solutions designed to integrate smoothly with your existing systems, ensuring efficient and secure data exchange."
  },
  {
    image: "https://i.postimg.cc/vZk9w55r/upi.png",
    title: "UPI PAYIN",
    description: "With UPI PAYIN, facilitate easy and instant payments through Unified Payments Interface, simplifying transactions for your customers."
  },
  {
    image: "https://i.postimg.cc/qMmyQPRZ/payouts.png",
    title: "Payouts",
    description: "Effortlessly manage payouts with our robust platform, ensuring timely disbursement of funds to beneficiaries with minimal effort."
  },
  {
    image: "https://i.postimg.cc/P5PZ7Svf/subscriptions.png",
    title: "Subscriptions",
    description: "Optimize customer retention with our subscription management services, handling recurring payments and enhancing user satisfaction."
  },
  {
    image: "https://i.postimg.cc/Rhdfk8Th/payment-link.png",
    title: "Payment link-based solutions",
    description: "Simplify payment collection with our payment link-based solutions, allowing you to generate secure payment links quickly and effortlessly."
  },
  {
    image: "https://i.postimg.cc/xTgyhks5/emi.png",
    title: "EMI's",
    description: "Offer flexible payment options with our EMI solutions, enabling customers to make purchases conveniently through installment plans."
  },
  {
    image: "https://i.postimg.cc/FKkyYThC/fraud.png",
    title: "FRM (Fraud Risk Module)",
    description: "Protect your transactions effectively with our Fraud Risk Module, leveraging advanced algorithms to detect and prevent fraudulent activities."
  },
  {
    image: "https://i.postimg.cc/QdygN2ZW/ertipay.png",
    title: "Ertipay BBPS",
    description: "Experience seamless bill payments with Ertipay BBPS, offering a reliable platform for handling utility bill payments with ease."
  },
  {
    image: "https://i.postimg.cc/XJw98XGw/loanzsimpl.png",
    title: "Loanzsimpl",
    description: "Streamline the lending process with Loanzsimpl, providing a user-friendly interface for managing loans and enhancing borrower experience."
  }
];


function Products() {
  return (
    <>
      <HeaderEr />
      <Helmet>
        <title>ERTITECH - Products</title>
        <meta
          name="description"
          content="Explore ERTITECH's range of technology products. Discover our innovative solutions designed to meet your business needs."
        />
        <meta
          name="keywords"
          content="ERTITECH, products, technology products, business solutions, innovation"
        />
      </Helmet>
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
