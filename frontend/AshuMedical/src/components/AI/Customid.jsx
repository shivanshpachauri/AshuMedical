import React from "react";
import { useSelector } from "react-redux";
import aiformatter from "./aiformatter";

export default function Customid() {
  const data = useSelector((state) => state.aislice);

  // prettier-ignore
  const body = data.body.replace(/\*\*/g, "");
  // const body=aiformatter(data.body);
  // console.log(body);
  // console.trace(body);

  return (
    <div
      className="mx-auto  d-flex rounded shadow-lg flex-column"
      style={{
        marginTop: "10px",
        backgroundColor: "lightblue",
        width: "600px",
        height: "auto",
        maxHeight: "500px",
        whiteSpace: "normal",
        overflowY: "auto",
      }}
    >
      <strong className="mx-auto m-2 p-2 text-capitalize">{data.title}</strong>
      <pre
        style={{
          fontSize: "80%",
          overflowX: "hidden",
          whiteSpace: "break-spaces",
          margin: "10px",
          padding: "10px",
          overflowWrap: "break-word",
          fontFamily: "sans-serif",
        }}
      >
        {body}
      </pre>
    </div>
  );
}
