import React from "react";
import './card.css';

type ProductCardProps = {
  name: string;
  imageSrc: string;
  description: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageSrc,
  description,
  price,
}) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={`Photo of ${name}`} className="product-img" />
      <div className="info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="price">${price.toFixed(2)}</p>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default ProductCard;
