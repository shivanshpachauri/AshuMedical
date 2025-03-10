import "./ViewCustomersHeading.css";
export default function ViewCustomersHeading() {
  return (
    <div className="viewcustomersHeading d-flex flex-row bg-primary  text-capitalize fw-bold rounded shadow-sm">
      <div className="col-2">name</div>

      <div className="col-2">pack</div>
      <div className="col-2">order_by</div>
      <div className="col-2">Manufacturer</div>
      <div className="col-2">date</div>

      <div className="col-1">quantity</div>
      <div className="col-2">delivered</div>
    </div>
  );
}
