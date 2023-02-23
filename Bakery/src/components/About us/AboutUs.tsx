import React from "react";
import Bakery from '../../images/Bakery.jpg';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us-section">
  <div className="container">
    <h2 className="section-title">About Us</h2>
    <div className="row">
      <div className="col-md-6">
      <img src={Bakery} className="about-us-image"/>
      </div>
      <div className="col-md-6">
        <p className="section-description">We are an artisan bakery that prides itself on offering high-quality products made with fresh, local ingredients. Since we opened our doors more than 30 years ago, we have been committed to satisfying the tastes and needs of our customers.</p>
        <p className="section-description">Our team of highly-trained bakers work hard every day to offer a wide variety of fresh and delicious breads, from classic French bread to whole grain breads, gluten-free breads and more.</p>
        <p className="section-description">In addition to our selection of breads, we also offer a wide variety of freshly baked pastries, from elegant wedding cakes to cookies and tarts. All of our products are made by hand with fresh, local ingredients, and are made with the same care and attention as our breads.</p>
        <p className="section-description">We are located in the heart of the city, in a convenient location for our clients. In addition, we offer custom catering services for special events, and we are always willing to work with our clients to create a menu that meets their needs and tastes.</p>
        
      </div>
    </div>
  </div>
</section>

  );
}

export default AboutUs;