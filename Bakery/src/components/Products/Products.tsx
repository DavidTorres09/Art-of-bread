import { useState, useRef, useEffect } from "react";
import ProductCard from "./card";
import Bread from '../../images/Bread.jpg';


const Products = () => {
  return (
    <div>
      <ProductCard
        name="Pan de maíz"
        imageSrc= 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        description="Pos pancito caliente"
        price={2.99}
      />

    </div>
  )
};

export default Products;