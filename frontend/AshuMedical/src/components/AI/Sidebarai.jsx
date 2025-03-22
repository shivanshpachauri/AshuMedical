import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebarai.css";
import Fetchai from "../Http/fetchai";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

export default function Sidebarai() {
  const { data = [], isLoading, isError } = Fetchai();

  if (isLoading) {
    return <Loading title={"Loading Sidebar"} />;
  }
  if (isError) {
    return <Error title={"Error in fetchai sidebar"} />;
  }

  return (
    <nav className="rounded col-md-2 d-none d-md-block bg-dark sidebar">
      <div className="nav flex-column">
        <h1 className="text-light">Database</h1>
        <div style={{ height: "500px", overflow: "scroll" }}>
          {data.map((item, index) => (
            <div
              key={index}
              className="sidebarrow text-capitalize position-relative m-2"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
