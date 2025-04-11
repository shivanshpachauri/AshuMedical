import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartslice";

export default function Productcards() {
  const shopping = useSelector((state) => state.cartslice.shopping);

  const dispatch = useDispatch();

  function handleclick(product) {
    dispatch(
      cartActions.setcart({
        id: product.id,
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
        quantity: product.quantity,
      })
    );
  }
  return (
    <div
      className="container px-4 py-5 shadow-lg text-center text-dark mb-4"
      id="custom-cards"
    >
      <h2 className="pb-2 border-bottom">Products</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {shopping ? (
          shopping.map((product, index) => (
            <div className="col" key={index}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="mb-3" style={{ color: "black" }}>
                  {product.name}
                </h3>
                <p style={{ color: "black" }}>{product.description}</p>
                <p style={{ color: "black" }}>
                  <strong>quantity:</strong> {product.quantity}
                </p>
                <p className="text-danger">
                  <strong>Price: {product.price}</strong>
                </p>
                <button
                  className="btn productcardbutton btn-primary mt-auto"
                  onClick={() => handleclick(product)}
                >
                  Buy now
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="alert alert-danger" role="alert">
            no items left to display
          </div>
        )}
      </div>
      <br />
    </div>
  );
}
