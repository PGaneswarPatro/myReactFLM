import React, { useState } from "react";

const Deposit = () => {
  const [amount, setAmount] = useState(0);

  const handleDeposit = () => {
    setAmount(amount + 100);

    setAmount((prev) => {
      console.log("prev " + prev);

      return prev + 100;
    });

    console.log("amount " + amount);
  };

  console.log("after rendering :- " + amount);

  return (
    <div>
      <h3>{amount}</h3>
      <button onClick={handleDeposit}>deposit 100</button>
    </div>
  );
};

export default Deposit;
