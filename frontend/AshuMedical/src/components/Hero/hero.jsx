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
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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
    document.body.style.borderStyle = "solid";
    document.body.style.borderWidth = "10px";
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
      <h1 className="m-2 p-2 d-block">{colorname}</h1>
      <h1 className="display-6 m-3"> Change background</h1>
      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div
            id="cardjumbotron"
            className="lh-1 text-dark h-100 p-5  border rounded-3 shadow-sm"
          >
            <h2>Change the background</h2>
            <button
              className="btn btn-outline-light"
              type="button"
              onClick={Changebackground}
            >
              Change
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div
            id="cardjumbotron"
            className="lh-1 h-100 p-5  border rounded-3 shadow-sm"
          >
            <h2>Add borders</h2>
            <button
              className="btn btn btn-outline-light"
              type="button"
              onClick={Changeborders}
            >
              Borders
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div
            id="cardjumbotron"
            className="lh-1 h-100 p-5  border rounded-3 shadow-sm"
          >
            <h2>Reset to defaults</h2>
            <button
              className="btn btn btn-outline-light"
              type="button"
              onClick={Reset}
            >
              Default
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div
            id="cardjumbotron"
            className="lh-1 h-100 p-5  border rounded-3 shadow-sm"
          >
            <h2>Font Size</h2>
            <button
              className="btn btn btn-outline-light"
              type="button"
              onClick={fontincrement}
            >
              Font size +
            </button>
            <button
              className="btn btn btn-outline-light"
              type="button"
              onClick={fontdecrement}
            >
              Font size -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
