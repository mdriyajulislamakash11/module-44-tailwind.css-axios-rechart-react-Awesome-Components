import React from "react";

const PriceOption = ({ price }) => {
  const { name, features, prices: amount } = price;

  return (
    <div className="bg-blue-500 text-white shadow-lg rounded-2xl p-6 border hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-center mb-2">{name}</h2>
      <p className="text-center text-6xl font-extrabold text-white mb-4">
        {amount}<span className="text-xl font-normal">/mon</span>
      </p>
      

      <ul className="mb-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-white flex items-start">
            <span className="text-green-300 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <button className="bg-white hover:bg-gray-200 text-blue-600 px-6 py-2 rounded-full font-semibold transition">
          Grab Offer
        </button>
      </div>
    </div>
  );
};

export default PriceOption;
