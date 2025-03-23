import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct.jsx";

faker.seed(123);

const Home = ({ cart, setCart }) => {
  const products = [...Array(10)].map(() => ({
    id: faker.string.uuid(), // Fixed UUID generation
    name: faker.commerce.productName(),
    price: faker.commerce.price({ min: 10, max: 1000 }), // Fixed price method
    image: faker.image.url(), // Fixed image generation
  }));

  const [pro] = useState(products);
  

  return (
    <div>
      {pro.map((p) => (
       <SingleProduct key={p.id} p={p} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Home;
