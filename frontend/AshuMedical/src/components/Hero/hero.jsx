import { useState } from "react";
import "./hero.css";
import rgbToColorName from "./colorname";
export default function Hero() {
  const [fontsize, setfontsize] = useState(16);
  const [colorname, setcolorname] = useState();

  function Changebackground() {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    setcolorname(rgbToColorName(r, g, b));
    document.body.style.background = `rgb(${r}, ${g}, ${b})`;
  }
  function Reset() {
    window.location.reload();
  }
  function fontincrement() {
    // setfontsize((prevalue) => prevalue + 10);
    setfontsize(fontsize + 10);
    document.body.style.fontSize = `${fontsize}px`;
  }
  function fontdecrement() {
    // setfontsize((prevalue) => prevalue - 10);
    setfontsize(fontsize - 10);
    document.body.style.fontSize = `${fontsize}px`;
  }
  function Changeborders() {
    document.body.style.borderStyle = "groove";
    document.body.style.borderWidth = "8px";
    document.body.style.borderRadius = "2%";
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    document.body.style.borderColor = `rgb(${r},${g},${b})`;
  }
  return (
    <div
      id="heroid"
      className="container px-4 py-5 shadow-lg bg-body-rounded text-center"
    >
      <h1 className="display-6 m-3  fw-bold">
        <span style={{ color: "violet" }}>S</span>
        <span style={{ color: "indigo" }}>t</span>
        <span style={{ color: "blue" }}>y</span>
        <span style={{ color: "green" }}>l</span>
        <span style={{ color: "yellow" }}>i</span>
        <span style={{ color: "orange" }}>n</span>
        <span style={{ color: "red" }}>g</span>
      </h1>
      <h1 className="m-1 p-2 d-block">{colorname}</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 m-1">
            <div
              id="cardjumbotron"
              className="lh-1 text-dark h-100 p-5 border border-0 rounded-3 shadow-sm"
              style={{ backgroundColor: "#8F87F1" }}
            >
              <h2>Change the background</h2>
              <button
                className="btn btn-outline-light"
                type="button"
                style={{ background: "#5353a8", border: "none" }}
                onClick={Changebackground}
              >
                Change
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 m-1">
            <div
              id="cardjumbotron"
              className="lh-1 h-100 p-5 border border-0 rounded-3 shadow-sm"
              style={{ backgroundColor: "#C68EFD" }}
            >
              <h2>Add borders</h2>
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={Changeborders}
                style={{ backgroundColor: "#693382", border: "none" }}
              >
                Borders
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 m-1">
            <div
              id="cardjumbotron"
              className="lh-1 h-100 p-5 border border-0 rounded-3 shadow-sm"
              style={{ backgroundColor: "#E9A5F1" }}
            >
              <h2>Reset to defaults</h2>
              <button
                className="btn btn-outline-light"
                type="button"
                onClick={Reset}
                style={{ background: "#db39c2", border: "none" }}
              >
                Default
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 m-1">
            <div
              id="cardjumbotron"
              className="lh-1 h-100 p-5 border border-0 rounded-3 shadow-sm"
              style={{ backgroundColor: "#FED2E2" }}
            >
              <h2>Font Size</h2>
              <button
                className="m-1 p-1 btn btn-outline-light"
                type="button"
                onClick={fontincrement}
                style={{
                  background: "burlywood",
                  width: "10%",
                  border: "none",
                }}
              >
                <span style={{ transform: "scale(1.25)", fontSize: "175%" }}>
                  +
                </span>
              </button>
              <button
                className="m-1 p-1 btn btn-outline-light"
                type="button"
                onClick={fontdecrement}
                style={{
                  background: "#d32525a8",
                  width: "10%",
                  border: "none",
                }}
              >
                <span style={{ transform: "scale(1.25)", fontSize: "175%" }}>
                  -
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
