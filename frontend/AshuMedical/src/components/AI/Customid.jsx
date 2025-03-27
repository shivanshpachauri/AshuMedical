import React from "react";
import { useSelector } from "react-redux";
import aiformatter from "./aiformatter";

export default function Customid() {
  const data = useSelector((state) => state.aislice);

  const formatted2 = aiformatter(data.body);

  return (
    <div
      className="mx-auto  d-flex rounded shadow-lg flex-column"
      style={{
        marginTop: "10px",
        backgroundColor: "lightblue",
        width: "600px",
        height: "500px",
        maxHeight: "500px",
        whiteSpace: "normal",
        overflowY: "auto",
      }}
    >
      <strong className="mx-auto m-2 p-2 text-truncate text-capitalize">
        {data.title}
      </strong>

      <div
        className="airesponse"
        style={{
          fontSize: "90%",
          overflowX: "hidden",
          height: "auto",
          margin: "10px",
          padding: "10px",
          overflowWrap: "break-word",
        }}
        dangerouslySetInnerHTML={{ __html: formatted2 }} // Render sanitized
      />
    </div>
  );
}
