import React from "react";
import Firstmedicine from "./Productimages/Firstmedicine.jpg";
import Secondmedicine from "./Productimages/Secondmedicine.jpg";
import Thirdmedicine from "./Productimages/Thirdmedicine.jpg";
export default function Productcards() {
  return (
    <div
      className="container px-4 py-5 shadow-lg text-center text-dark mb-4"
      id="custom-cards"
    >
      <h2 className="pb-2 border-bottom">Custom cards</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${Firstmedicine})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
              {/* <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>Earth</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>3d</small>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${Secondmedicine})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3  text-shadow-1">
              {/* <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>India</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>4d</small>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{
              backgroundImage: `url(${Thirdmedicine})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              {/* <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <img
                    src="https://github.com/twbs.png"
                    alt="Bootstrap"
                    width="32"
                    height="32"
                    className="rounded-circle border border-white"
                  />
                </li>
                <li className="d-flex align-items-center me-3">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#geo-fill"></use>
                  </svg>
                  <small>California</small>
                </li>
                <li className="d-flex align-items-center">
                  <svg className="bi me-2" width="1em" height="1em">
                    <use xlinkHref="#calendar3"></use>
                  </svg>
                  <small>5d</small>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
