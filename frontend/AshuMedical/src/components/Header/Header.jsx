// import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="container  text-capitalize fs-2 fw-2 ">
      <h1
        className="header d-flex justify-content-center display-1"
        style={{ color: "#27374d" }}
      >
        Ashu medical agencies
      </h1>
      <div className=" header d-flex flex-column">
        {" "}
        <h1
          className="mx-auto"
          style={{
            // fontWeight: "bold",
            marginBottom: "20px",
            // color: "black",
          }}
        >
          आशु मेडिकल एजेंसीज
        </h1>
        {/* style={{ fontSize: "1.5em" }} */}
        <p className="mx-auto">
          {" "}
          प्रथम तल चौबे मार्केट,सदर कांटा, ललितपुर-284403
        </p>
      </div>
      <marquee> Contact us at +91 9415507955</marquee>
    </div>
  );
}
