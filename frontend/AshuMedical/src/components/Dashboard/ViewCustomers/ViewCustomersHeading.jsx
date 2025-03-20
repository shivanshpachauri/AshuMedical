import "./ViewCustomersHeading.css";
export default function ViewCustomersHeading() {
  return (
    <div className="m-1 p-1 viewcustomersHeading d-flex flex-row bg-primary  text-capitalize  rounded shadow-sm">
      <div className="col-2">name</div>

      <div className="col-2">pack</div>
      <div className="col-2">order_by</div>
      <div className="col-2">Manufacturer</div>
      <div className="col-2">date</div>

      <div className="col-1">quantity</div>
      <div className="col-2">sent</div>
    </div>
  );
}
