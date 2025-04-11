import React, { useContext, useState } from "react";
import "./bestselling.css";
import { FixedSizeList as List } from "react-window";
import Newentries from "../Newentries/Newentries";
import TableRow from "./TableRow";
import TableHead from "../TableHead/TableHeadbestselling";
import Fetchingmedicines from "../Http/Fetchingmedicines";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Updatemedicine from "../Modals/Updatemedicine";
import { DeleteContext } from "../Context/deletecontext";
import { useSelector } from "react-redux";
function Bestselling() {
  const { deletestate } = useContext(DeleteContext);
  const [newentries, setnewentries] = useState(false);
  const isLoggedIn = useSelector((state) => state.authslice.isLoggedIn);

  const { data, isLoading, isError } = Fetchingmedicines();

  if (isLoading) {
    return <Loading title="Loading Bestselling" />;
  }
  if (isError) {
    return <Error title="Error in bestselling" />;
  }

  return (
    <div>
      <Updatemedicine />
      <div id="bestsellingtable">
        <div className="text-capitalize container px-4 py-5">
          <h1 className="theading">Medicines</h1>
          {isLoggedIn && (
            <div className="d-flex justify-content-center">
              <button
                type="button"
                id="addnewentries"
                className="btn btn-success"
                onClick={() => setnewentries(!newentries)}
              >
                Add new entries
              </button>
            </div>
          )}
          {newentries && isLoggedIn && <Newentries />}
          {deletestate && (
            <div className="alert alert-danger" role="alert">
              <strong>Deleted successfully</strong>
            </div>
          )}
          <TableHead />
          {data ? (
            <List
              id="Reactwindowlist"
              height={500}
              itemCount={data.length}
              itemSize={85}
              width="100%"
              style={{ overflowX: "hidden" }}
            >
              {({ index, style }) => (
                <TableRow
                  key={data[index].id}
                  item={data[index]}
                  style={style}
                />
              )}
            </List>
          ) : (
            <div>No elements present </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Bestselling);
