import React, { useEffect, useState } from "react";

export default function BookCart({ book }) {
  const handleButton = () => {
    alert("Book Added to Cart");
  };

  const [count, setCount] = useState(0);
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="container ">
      {console.log("Enter")}
      <img src={book.image} alt="" />
      <h2>Rating :{book.title}</h2>

      <h2>Price : {book.price} </h2>
      <div className="counterButton">
        <button onClick={handleMinus}>-</button>
        <p>{count}</p>
        <button onClick={handlePlus}>+</button>
      </div>
      <button onClick={handleButton}>Add to Cart</button>
    </div>
  );
}
