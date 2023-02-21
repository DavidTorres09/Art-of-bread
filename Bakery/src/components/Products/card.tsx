import { useState, useRef, useEffect } from "react";
import Bread from '../../images/Bread.jpg';
import './card.css'

const Card = () => {
  return(
  <div className="card">
    <img src={Bread} alt="Photo of the product" className="experience-img" />
      <div className="info">
        <h2>Nombre del producto</h2>
        <p>Descripción del producto.</p>
        <p className="price">$99.99</p>
        <button>Buy</button>
      </div>
  </div>
  )
};

export default Card;