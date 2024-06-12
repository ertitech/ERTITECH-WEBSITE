import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pricings.css'; 
import HeaderEr from '../Header Footer/HeaderEr';
import Banner from '../Header Footer/Banner';
import FooterEr from '../Header Footer/FooterEr';

function Pricings() {
  return (
    <>
      <HeaderEr />
      <Banner
        title="Pricings"
        belowText="Home &gt; Pricing Lists"
        imageSrc="https://i.postimg.cc/XqPkC3Mg/pricing-top-header-banner.png"
      />
      <div className="container my-5">
        <h4 className="mb-4">Payment Gateway <span style={{ color: '#e44a20',fontWeight:'bold' }}> Fees Structure</span></h4>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead style={{ backgroundColor: '#6ec13a', color: '#fff' }}>
              <tr>
                <th>Payment Mode</th>
                <th>Erti Standard*</th>
                <th>Erti Elite*</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#e44a20', color: '#fff' }}>
              <tr>
                <td className='text-start'>One Time set-up fee</td>
                <td>2999/-</td>
                <td>4999/-</td>
              </tr>
              <tr>
                <td className='text-start'>AMC</td>
                <td>1999/-</td>
                <td>1999/-</td>
              </tr>
              <tr>
                <td className='text-start'>Credit Cards</td>
                <td>2.00%</td>
                <td>1.85%</td>
              </tr>
              <tr>
                <td className='text-start'>Debit Cards</td>
                <td>1.50%</td>
                <td>1.00%</td>
              </tr>
              <tr>
                <td className='text-start'>Net Banking</td>
                <td>2.00%</td>
                <td>1.85%</td>
              </tr>
              <tr>
                <td className='text-start'>UPI (platform fee)</td>
                <td>1.00%</td>
                <td>1.00%</td>
              </tr>
              <tr>
                <td className='text-start'>Wallet</td>
                <td>2.00%</td>
                <td>1.85%</td>
              </tr>
              <tr>
                <td className='text-start'>EMI</td>
                <td>2.00%</td>
                <td>1.85%</td>
              </tr>
              <tr>
                <td className='text-start'>International Cards</td>
                <td>3.00%</td>
                <td>2.85%</td>
              </tr>
              <tr>
                <td className='text-start'>Subscriptions</td>
                <td>2.00%</td>
                <td>1.85%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted mt-1 fw-bold">* Relevant tax applicable and other T&C apply</p>
      </div>
      <FooterEr />
    </>
  );
}

export default Pricings;