import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebarai.css";
import Fetchai from "../Http/fetchai";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { useDispatch } from "react-redux";
import { aiActions } from "../store/aislice";
import { useState, useMemo } from "react";
export default function Sidebarai() {
  const { data = [], isLoading, isError } = Fetchai();
  const [searchval, setsearchval] = useState("");
  const [editdelete, seteditdelete] = useState(false);
  const dispatch = useDispatch();

  const filtereddata = useMemo(
    () =>
      data.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(searchval.toLowerCase())
      ),
    [data, searchval]
  );

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
          name="search"
          id="aisearch"
          type="search"
          value={searchval}
          onChange={(e) => setsearchval(e.target.value)}
          style={{ width: "10em", padding: 0 }}
        />
        <div
          className="sidebarlist"
          style={{ height: "500px", overflow: "auto" }}
        >
          {filtereddata.toReversed().map((item, index) => (
            <NavLink
              key={index}
              onMouseOver={() => {
                seteditdelete(true);
              }}
              to={`/ai/${item.id}`}
              style={{ maxWidth: "150px" }}
              className="sidebarrow d-block text-truncate text-decoration-none  position-relative m-2"
              onClick={() => handleclick(item)}
            >
              {item.title}
              {editdelete && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
              )}
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
