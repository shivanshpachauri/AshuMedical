import Sidebar from "./Sidebar";
import DashboardHeading from "./DashboardHeading";

import { Outlet } from "react-router-dom";
import EditCustomers from "./ViewCustomers/EditCustomers";
export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <EditCustomers />
          <DashboardHeading />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
