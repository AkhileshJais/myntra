import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
    <div className='footer_container'>
    <div className='footer_column'>
    <h3>ONLINE SHOPPING</h3>
    <a href='#'>Man</a>
    <a href='#'>Women</a>
    <a href='#'>Kids</a>
    <a href='#'>Home & Living</a>
    <a href='#'>Beauty</a>
    <a href='#'>Gift Card</a>
    <a href='#'>Myntra Insider</a>
    </div>
      
    <div className='footer_column'>
    <h3>CUSTOMER POLICIES</h3>
    <a href='#'>Contact US</a>
    <a href='#'>FAQ</a>
    <a href='#'>T&C</a>
    <a href='#'>Terms of Use</a>
    <a href='#'>Track Orders</a>
    <a href='#'>Shipping</a>
    <a href='#'>Cancellation</a>
    </div>

    </div>
    <div className='copright'>
    @2023 www.myntra.com. All rights reserved.
    </div>
    <hr/>
    {/* <div className='copright'>
    @2023 www.myntra.com. All rights reserved.
    </div> */}
    </footer>
  );
}

export default Footer;
