import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebarai.css";
import Fetchai from "../Http/fetchai";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { useDispatch } from "react-redux";
import { aiActions } from "../store/aislice";
import { useState, useEffect } from "react";
export default function Sidebarai() {
  const { data = [], isLoading, isError } = Fetchai();
  const [searchval, setsearchval] = useState("");
  const [finaldata, setfinaldata] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    setfinaldata(
      data.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchval.toLowerCase())
      )
    );
  }, [searchval, data, setfinaldata]);

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
        <input
          className="mx-auto"
          type="search"
          value={searchval}
          onChange={(e) => setsearchval(e.target.value)}
          style={{ width: "10em", padding: 0 }}
        />
        <div
          className="sidebarlist"
          style={{ height: "500px", overflow: "auto" }}
        >
          {finaldata.toReversed().map((item, index) => (
            <NavLink
              key={index}
              to={`/ai/${item.id}`}
              style={{ maxWidth: "150px" }}
              className="sidebarrow d-block text-truncate text-decoration-none  position-relative m-2"
              onClick={() => handleclick(item)}
            >
              {item.title}
              {/* {item.title.length > 20
                ? `${item.title.substr(0, 20)}...`
                : item.title.trim()} */}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
