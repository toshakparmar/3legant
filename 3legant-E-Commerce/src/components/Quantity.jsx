import React, { useState, useEffect } from "react";

const Quantity = ({ singleProd = 0, amount = 0, onQuantityChange }) => {
  const [Amount, setAmount] = useState(amount);

  const increment = () => {
    setAmount(Amount + 1);
  };

  const decrement = () => {
    if (Amount > 0) setAmount(Amount - 1);
  };

  useEffect(() => {
    if (typeof onQuantityChange === "function") {
      onQuantityChange(Amount);
    }
  }, [Amount, onQuantityChange]);

  return (
    <div
      className={`quantity inline-flex rounded items-center border max-sm:px-0.5 py-0   ${
        singleProd === 1
          ? "py-2 px-4 border-none bg-[#F5F5F5]"
          : "px-2 py-0.5 border-[#6C7275]"
      }`}
    >
      <div className="minus mt-1">
        <button onClick={decrement}>
          <img src="/src/assets/Minus.png" alt="" />
        </button>
      </div>
      <div
        className={`amount  text-[#121212] text-center text-[14px] font-semibold font-int ${
          singleProd === 1 ? "mx-5" : "mx-2"
        }`}
      >
        {Amount}
      </div>
      <div className="plus mt-1">
        <button onClick={increment}>
          <img src="/src/assets/Add.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
