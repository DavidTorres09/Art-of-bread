import React from 'react';
import './footer.css';
import Facebook from '../../icons/Facebook.png';
import Instagram from '../../icons/Instagram.png';
import Whatsapp from '../../icons/Whatsapp.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <p>123 Main St.</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (555) 555-5555</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="col-md-6">
            <h2>Follow Us</h2>
            <ul className="social-media">
              <li><img src={Facebook} className="social-img"/></li>
              <li><img src={Instagram} className="social-img"/></li>
              <li><img src={Whatsapp} className="social-img"/></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2023 Example Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
