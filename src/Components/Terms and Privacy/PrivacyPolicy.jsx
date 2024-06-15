import React from 'react';
import { Row, Col } from 'react-bootstrap';
import HeaderEr from '../Header Footer/HeaderEr';
import Banner from '../Header Footer/Banner';
import { FaHandPointRight } from "react-icons/fa";
import FooterEr from '../Header Footer/FooterEr';
import './Terms.css'


function PrivacyPolicy() {
  return (
    <>
      <HeaderEr />
      <Banner
        title="Privacy Policy"
        belowText="Home &gt; Privacy Policy Informations"
        imageSrc="https://i.postimg.cc/8CvrdNhh/terms-privacy-policy-banner-strip.png"
      />
      <div className="container-fluid termscon my-5" >
        <Row>
          <Col>
          <h4 className="tit">Our<span style={{ color: '#e44a20', fontWeight: 'bold' }}> Privacy Policies</span></h4>
            <div className='lastupdate mb-3 '>Last Updated: 1st April 2024</div>
             <p className="para">
              The term “WE”, “OUR” and “US” refers to ‘Ertitech Solutions Pvt’ operates the website www.ertitech.com (website). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of our services. We inform you in our privacy policy regarding the disclosure of personal information of yours (“YOU”, “YOUR”, “USER”, MERCHANT”, “PARTNER” refers to the website user of Ertitech).
              We are committed to protecting your privacy and maintaining the confidentiality of your personal information. By using our services, we will not share your personal information to external third party or anyone. We will use your personal information for improving our service. By using the service, you agreed to the collection and use of your personal information with this policy.
            </p>
            <h5 className='termtext'>Information Collection and Use</h5>
            <p className="para">We collect various types of information for the purpose of providing and improving our payment gateway services. This may include:</p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Personal Information: We may collect personal information such as your name, email address, phone number, postal address, and payment card details.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Transaction Information: We collect transaction details, including the amount, currency, transaction ID, and other relevant information necessary for processing payments.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              Device Information: We may collect information about the device you use to access our services, including device identifiers, IP address, browser type, and operating system.
            </p>
            
            <h5 className='termtext'>Use of Information</h5>
            <p className="para">We use the information we collect for the following purposes as per the KYC norms of RBI and Banking policies:</p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              To process payments and facilitate transactions.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              To communicate with you regarding your transactions, account status, and updates to our services.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              To provide customer support and respond to inquiries.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              To detect and prevent fraud, unauthorized transactions, and other illegal activities.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              To send updates, news, newsletters, and marketing purposes (send us an email - hello@ertitech.com to unsubscribe).
            </p>
          
            <h5 className='termtext'>Disclosure of Information</h5>
            <p className="para">We may disclose your personal information in the following circumstances:</p>

            <p className="para">
              <FaHandPointRight className="tpicon" />
              To trusted third-party service providers who assist us in operating our payment gateway services, conducting our business, or servicing you.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              To comply with legal obligations, such as responding to lawful requests from government authorities.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              To protect and defend our rights or property, including enforcing our agreements and policies.
            </p>
            <p className="para">
              <FaHandPointRight className="tpicon" />
              In connection with a corporate transaction, such as a merger, acquisition, or sale of assets.
            </p>
            
            <h5 className='termtext'>Data Retention</h5>
            <p className="para">We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
            <h5 className='termtext'>Your Rights</h5>
            <p className="para">You have the right to access, correct, or delete your personal information. You may also have the right to object to or restrict certain processing of your personal information. To exercise these rights, please contact us using the information provided below.</p>
            <h5 className='termtext'>Changes to This Privacy Policy</h5>
            <p className="para">We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on this page.</p>
            <h4 className='termtext fw-bold'>Cookies Policies</h4>
            <h5 className='termtext m-0 '>What are Cookies?</h5>
            <p className="para">Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p>
            <h5 className='termtext'>What do they do?</h5>
            <p className="para">These cookies are necessary for the website to function properly such as page navigation, access to secure areas of the website, allow us to analyze how visitor use our website, so the we can measure and improve its performance.</p>
            <p className="para">When you visit or interact with our sites, services, applications, tools, or messaging, we or our authorized service providers may use cookies, web beacons, and other similar technologies for storing information to help provide you with a better, faster, and safer experience and for advertising purposes.</p>
            <h5 className='termtext'>How Do We Use Cookies Technologies?</h5>
            <p className="para">When you visit our Sites, use our Services, or visit a third-party website for which we provide online Services, we and our business partners and vendors may use cookies and other tracking technologies (collectively, “Cookies”) to recognize you as a User and to customize your online experiences, the Services you use, and other online content and advertising; measure the effectiveness of promotions and perform analytics; and to mitigate risk, prevent potential fraud, and promote trust and safety across our Sites and Services. Certain aspects and features of our Services and Sites are only available using Cookies, so if you choose to disable or decline Cookies, your use of the Sites and Services may be limited or not possible.</p>
          </Col>
        </Row>
      </div>
      <FooterEr />
    </>
  );
}

export default PrivacyPolicy;
