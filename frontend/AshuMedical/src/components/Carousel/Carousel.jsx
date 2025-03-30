// import React from "react";
import Firstphoto from "../Carousel/carouselphotos/Firstphoto.jpg";
import Secondphoto from "../Carousel/carouselphotos//Secondphoto.jpg";
import Thirdphoto from "../Carousel/carouselphotos/Thirdphoto.jpg";
import "./carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function Carousel() {
  return (
    <div className="maincarousel container d-flex shadow-lg px-4 py-4 my-5 align-items-center">
      <div className="d-flex flex-column">
        {" "}
        <h1
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            color: "black",
          }}
        >
          आशु मेडिकल एजेंसीज
        </h1>
        <p style={{ fontSize: "1.5em" }}>
          {" "}
          प्रथम तल चौबे मार्केट,सदर कांटा, ललितपुर-284403
        </p>
      </div>

      <div
        id="carousel"
        className="d-flex justify-content-center align-content-center"
      >
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={Firstphoto} className=" d-block" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src={Secondphoto} className=" d-block" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src={Thirdphoto} className=" d-block" alt="Third slide" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
