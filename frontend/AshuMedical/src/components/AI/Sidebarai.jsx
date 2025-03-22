import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebarai.css";
import Fetchai from "../Http/fetchai";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { useDispatch } from "react-redux";
import { aiActions } from "../store/aislice";

export default function Sidebarai() {
  const { data = [], isLoading, isError } = Fetchai();
  const dispatch = useDispatch();
  function handleclick(item) {
    dispatch(
      aiActions.setaislice({
        id: item.id,
        title: item.title,
        body: item.body,
      })
    );
  }
  if (isLoading) {
    return <Loading title={"Loading Sidebar"} />;
  }
  if (isError) {
    return <Error title={"Error in fetchai sidebar"} />;
  }

  return (
    <nav
      className="rounded col-md-2 d-none d-md-block bg-dark sidebar"
      style={{
        marginLeft: "0.57rem",
      }}
    >
      <div className="nav flex-column">
        <h3 className="mx-auto text-light">Save</h3>
        <div style={{ height: "500px", overflow: "scroll" }}>
          {data.map((item, index) => (
            <NavLink
              key={index}
              to={`/ai/${item.id}`}
              className="sidebarrow d-block text-decoration-none text-capitalize position-relative m-2"
              onClick={() => handleclick(item)}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
