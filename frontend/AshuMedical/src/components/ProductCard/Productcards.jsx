import React from "react";
import Firstmedicine from "./Productimages/Firstmedicine.jpg";
import Secondmedicine from "./Productimages/Secondmedicine.jpg";
import Thirdmedicine from "./Productimages/Thirdmedicine.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartslice";

export default function Productcards() {
  const dispatch = useDispatch();
  const products = [
    {
      image: Firstmedicine,
      name: "Product One",
      description: "This is a brief description of Product One.",
      quantity: 1,
      price: 20,
    },
    {
      image: Secondmedicine,
      name: "Product Two",
      description: "This is a brief description of Product Two.",
      quantity: 2,
      price: 30,
    },
    {
      image: Thirdmedicine,
      name: "Product Three",
      description: "This is a brief description of Product Three.",
      quantity: 3,
      price: 16,
    },
  ];
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
        {products.map((product, index) => (
          <div className="col" key={index}>
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
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
                  className="btn btn-primary mt-auto"
                  onClick={() => handleclick(product)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
