import Sidebar from "./Sidebar";
import Chart from "./Chart";
import Parsingcsv from "./parsingcsv";
import DashboardHeading from "./DashboardHeading";
import SizeMonitor from "./SizeMonitor";
export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <SizeMonitor />
          <DashboardHeading />
          <Parsingcsv />
          <Chart />
        </main>
      </div>
    </div>
  );
}
