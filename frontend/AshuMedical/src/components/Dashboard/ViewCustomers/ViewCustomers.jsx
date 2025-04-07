import { FixedSizeList as List } from "react-window";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

import ViewCustomersHeading from "./ViewCustomersHeading";
import "./ViewCustomers.css";
import Loading from "../../Loading/Loading";
import Error from "../../Error/Error";
import fetchdelivery from "../../Http/fetchdelivery";

import { modalActions } from "../../store/editcustomerslice";
import { modalInputActions } from "../../store/Editinputcustomerslice";
export default function ViewCustomers() {
  const dateInstance = new Date();
  const date = `${dateInstance.getFullYear()}-${
    dateInstance.getMonth() + 1
  }-${dateInstance.getDate()}`;

  const { data, isLoading, isError } = fetchdelivery();
  const dispatch = useDispatch();
  if (isLoading) {
    return <Loading title="loading view customers" />;
  }
  if (isError) {
    return <Error title="Error in view customers" />;
  }
  function handledoubleclick(data) {
    dispatch(modalInputActions.setdelivery(data));
    dispatch(modalActions.toggle());
  }

  return (
    <>
      <ViewCustomersHeading />
      <List
        className="rounded shadow-lg"
        height={400} // Set the height of the list
        itemCount={data.length}
        itemSize={65} // Set the height of each row
        width={"100%"}
        style={{ border: "none", backgroundColor: "lightblue" }}
      >
        {({ index, style }) => (
          <div
            className=" m-1 p-1 shadow-sm  flex-wrap customerstable d-flex flex-row text-capitalize"
            style={style}
            onDoubleClick={() => {
              if (localStorage.getItem("loggedin")) {
                handledoubleclick(data[index]);
              } else {
                Swal.fire("You need to log in first!");
              }
            }}
            key={index}
          >
            <div className="col-2">{data[index].name}</div>
            <div className="col-2">{data[index].pack_size_label}</div>
            <div className="col-2">{data[index].order_by}</div>
            <div className="col-2 flex-wrap">
              {data[index].manufacturer_name}
            </div>
            <div className="col-2">
              {data[index].date ? data[index].date.substr(0, 10) : date}
            </div>
            <div className="col-1">{data[index].quantity}</div>
            <div className="col-2">{data[index].delivered}</div>
            <br />
            <br />
          </div>
        )}
      </List>
    </>
  );
}
