// import "react";
import Linechart from "./Linechart/Linechart";

export default function Chart() {
  return (
    <section>
      <canvas
        className="my-4 chartjs-render-monitor"
        id="myChart"
        width="1076"
        height="454"
        style={{ display: "block", width: "1076px", height: "454px" }}
      >
        <Linechart />
      </canvas>
    </section>
  );
}
