import React, { useEffect, useState } from "react";
import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("./discount.json")
    .then(res => res.json())
    .then(data =>setPrices(data))
  }, []);



  return (
    <div>
      <h1 className="text-center text-2xl my-4 font-semibold">Best Price in the Town: {prices.length}</h1>
    <div className="grid md:grid-cols-3 gap-4">
        {
            prices.map((price) => <PriceOption key={price.id} price={price} />)
        }
    </div>
    </div>
  );
};

export default PriceOptions;
