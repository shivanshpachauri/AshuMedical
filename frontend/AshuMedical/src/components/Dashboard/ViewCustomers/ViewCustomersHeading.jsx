export default function ViewCustomersHeading() {
  return (
    <div className="container bg-primary  text-capitalize fw-bold rounded shadow-sm">
      <div className="row ">
        <div className="col-2">name</div>

        <div className="col-2">pack_size_label</div>
        <div className="col-2">order_by</div>
        <div className="col-2">Manufacturer_name</div>
        <div className="col-2">date</div>

        <div className="col-1">quantity</div>
        <div className="col-2">delivered</div>
      </div>
    </div>
  );
}
