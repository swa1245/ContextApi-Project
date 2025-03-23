import React, { useContext } from "react";
import { Car } from "../Context";

const SingleProduct = ({p}) => {
  const { cart, setCart } = useContext(Car);
  return (
    <div className="flex items-center justify-between p-4 border-b bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
      <img
        className="w-20 h-20 rounded-lg object-cover"
        src={p.image}
        alt={p.name}
      />

      <div className="flex flex-col flex-1 ml-4">
        <h2 className="text-xl font-semibold text-gray-800">{p.name}</h2>
        <p className="text-lg font-medium text-gray-600">₹{p.price}</p>
      </div>
      {cart.includes(p) ? (
        <button
          onClick={() => {
            setCart(cart.filter((c) => c.id !== p.id));
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          remove to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            setCart([...cart, p]);
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
