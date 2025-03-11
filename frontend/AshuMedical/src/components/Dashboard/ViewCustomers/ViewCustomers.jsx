import { FixedSizeList as List } from "react-window";
import ViewCustomersHeading from "./ViewCustomersHeading";
import { useCallback, useState } from "react";
import "./ViewCustomers.css";
import { modalActions } from "../../store/editcustomerslice";
import Loading from "../../Loading/Loading";
import Error from "../../Error/Error";
import fetchdelivery from "../../Http/fetchdelivery";
import { useDispatch } from "react-redux";
import { modalInputActions } from "../../store/Editinputcustomerslice";
export default function ViewCustomers() {
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
        height={400} // Set the height of the list
        itemCount={data.length}
        itemSize={35} // Set the height of each row
        width={"100%"}
        style={{ border: "1px solid black", backgroundColor: "lightblue" }}
      >
        {({ index, style }) => (
          <div
            className="customerstable d-flex flex-row text-capitalize"
            style={style}
            onDoubleClick={() => handledoubleclick(data[index][1])}
            key={index}
          >
            {/* <div className="col-1">{data[index][1].id}</div> */}
            <div className="col-2">{data[index][1].name}</div>
            <div className="col-2">{data[index][1].pack_size_label}</div>
            <div className="col-2">{data[index][1].order_by}</div>
            <div className="col-2">{data[index][1].manufacturer_name}</div>
            <div className="col-2">{data[index][1].date}</div>
            <div className="col-1">{data[index][1].quantity}</div>
            <div className="col-2">{data[index][1].delivered}</div>
          </div>
        )}
      </List>
    </>
  );
}
