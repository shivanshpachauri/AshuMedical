import FirstImage from "./carouselphotos/FirstImage.jpg";
import SecondImage from "./carouselphotos/SecondImage.jpg";

import "./carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function Carousel() {
  return (
    <div className="maincarousel container d-flex flex-wrap flex-column  align-items-center">
      <div
        id="carousel"
        className="d-flex justify-content-center align-content-center"
      >
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={FirstImage} className=" d-block" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src={SecondImage} className=" d-block" alt="Second slide" />
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
