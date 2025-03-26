import React, { useContext, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import "./bestselling.css";
import { FixedSizeList as List } from "react-window";
import Newentries from "../Newentries/Newentries";
import TableRows from "./TableRows";
import TableHead from "../TableHead/TableHead";
import Fetchingmedicines from "../Http/Fetchingmedicines";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import Updatemedicine from "../Modals/Updatemedicine";
import { DeleteContext } from "../Context/deletecontext";
function Bestselling() {
  const { deletestate } = useContext(DeleteContext);
  const [newentries, setnewentries] = useState(false);
  const [submitstate, setsubmitstate] = useState(false);
  const queryClient = useQueryClient();
  if (submitstate) {
    queryClient.invalidateQueries(["Fetchmedicines"]);
  }

  const { data, isLoading, isError } = Fetchingmedicines();

  if (isLoading) {
    return <Loading title="Loading Bestselling" />;
  }
  if (isError) {
    return <Error title="Error in bestselling" />;
  }

  return (
    <>
      <Updatemedicine />
      <div id="bestsellingtable">
        <div className="text-capitalize container px-4 py-5">
          <h1 className="theading">Medicines</h1>
          <button
            type="button"
            id="addnewentries"
            className="btn btn-success"
            onClick={() => setnewentries(!newentries)}
          >
            Add new entries
          </button>

          {newentries && (
            <Newentries
              submitstate={submitstate}
              setsubmitstate={setsubmitstate}
            />
          )}
          {deletestate && (
            <div className="alert alert-danger" role="alert">
              <strong>Deleted successfully</strong>
            </div>
          )}
          <TableHead />
          <List
            id="Reactwindowlist"
            height={500}
            itemCount={data.length}
            itemSize={85}
            width="100%"
          >
            {({ index, style }) => (
              <TableRows index={index} style={style} data={data} />
            )}
          </List>
        </div>
      </div>
    </>
  );
}

export default React.memo(Bestselling);
