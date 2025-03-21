import React from "react";
import { NavLink } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import { getAi } from "../Http/http";
export default function Sidebarai() {
  const data = getAi();
  console.trace(data);
  return (
    <nav className="rounded col-md-2 d-none d-md-block bg-dark sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <h1 className="text-light">hello world</h1>
          <List
            className="rounded shadow-lg"
            height={400}
            itemsSize={35}
            width={"100%"}
            itemSize={100}
            style={{ border: "none" }}
          >
            {({ index, style }) => (
              <div style={style} key={index}>
                <div className="text-light">thello world</div>
              </div>
            )}
          </List>
        </ul>
      </div>
    </nav>
  );
}
