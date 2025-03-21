import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebarai.css";
import { FixedSizeList as List } from "react-window";
import { getAi } from "../Http/http";
import Fetchai from "../Http/fetchai";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
export default function Sidebarai() {
  const { data, isLoading, isError } = Fetchai();

  if (isLoading) {
    return <Loading title={"Loading Sidebar"} />;
  }
  if (isError) {
    return <Error title={"Error in fetchai sidebar"} />;
  }
  return (
    <nav className="rounded col-md-2 d-none d-md-block bg-dark sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <h1 className="text-light">Database</h1>
          <List
            className="rounded shadow-lg"
            height={400}
            itemSize={80}
            width={"100%"}
            itemCount={data.length}
            style={{ border: "none" }}
          >
            {({ index, style }) => (
              <div
                style={style}
                key={index}
                className=" sidebarrow text-capitalize position-relative m-2 p-2 "
              >
                {data[index].title}
              </div>
            )}
          </List>
        </ul>
      </div>
    </nav>
  );
}
