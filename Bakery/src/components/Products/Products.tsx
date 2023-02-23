import { useState, useRef, useEffect } from "react";
import ProductCard from "./card";


const Products = () => {
  return (
    <div>
      <div>
        <h2 className="title">Products</h2>
        <p className="description">Fresh products all the days.</p>

      </div>
      <div className="container">

        <ProductCard
          name="Bread with dog face"
          imageSrc='https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="This dog-shaped bun is perfect for a fun afternoon with friends."
          price={2.99}
        />
        <ProductCard
          name="Bread with Seeds!"
          imageSrc='https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Delicious seeded bread for a flavorful breakfast."
          price={2.99}
        />

        <ProductCard
          name="Baguette"
          imageSrc='https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="This baguette is perfect for making a French sandwich."
          price={2.99}
        />
        <ProductCard
          name="Bread with cheese"
          imageSrc='https://images.pexels.com/photos/13427800/pexels-photo-13427800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Satisfy your cheese cravings with our freshly baked bread topped with savory melted cheese."
          price={2.99}
        />
        <ProductCard
          name="Cake"
          imageSrc='https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Indulge in a heavenly treat with our fluffy and decadent cake, perfect for any occasion."
          price={2.99}
        />
        <ProductCard
          name="Donuts"
          imageSrc='https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Indulge yourself with our delicious donuts, available in a variety of flavors and toppings that will make your mouth water."
          price={2.99}
        />
        <ProductCard
          name="Pancakes"
          imageSrc='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Whether you like them stacked high or in a neat little stack, these pancakes will make your morning bright."
          price={2.99}
        />
        <ProductCard
          name="Cupcakes"
          imageSrc='https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Satisfy your cravings with our heavenly cupcakes, bursting with flavor and finished with a delicate swirl of frosting."
          price={2.99}
        />
        <ProductCard
          name="Macarons"
          imageSrc='https://images.pexels.com/photos/3776942/pexels-photo-3776942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Indulge in the exquisite flavors of these French delicacies, a bite-sized piece of heaven."
          price={2.99}
        />
        <ProductCard
          name="Cookies"
          imageSrc='https://images.pexels.com/photos/298217/pexels-photo-298217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Sweet and crunchy, our freshly-baked cookies are the perfect treat for any occasion."
          price={2.99}
        />
        <ProductCard
          name="Coffee"
          imageSrc='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Get energized with our delicious coffee, made with the finest beans and roasted to perfection"
          price={2.99}
        />
        <ProductCard
          name="Frappe"
          imageSrc='https://images.pexels.com/photos/214333/pexels-photo-214333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description="Frappe, the perfect drink to cool off and enjoy a delicious blend of coffee and cream."
          price={2.99}
        />
        
        
      </div>
    </div>
  )
};

export default Products;