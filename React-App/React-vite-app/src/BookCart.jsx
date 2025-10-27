import React from "react";

export default function BookCart(props) {
  return (
    
    <div className="container">
      <img src={props.book} alt="" />
      <h2>Price : {props.price} </h2>
      <h2>Rating :{props.rating}</h2>
      <button>Add to Cart</button>
    </div>
  );
}
