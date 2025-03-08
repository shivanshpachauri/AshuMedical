export default function SizeMonitor() {
  return (
    <div
      className="chartjs-size-monitor"
      style={{
        position: "absolute",
        inset: "0px",
        overflow: "hidden",
        pointerEvents: "none",
        visibility: "hidden",
        zIndex: -1,
      }}
    >
      <div
        className="chartjs-size-monitor-expand"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          pointerEvents: "none",
          visibility: "hidden",
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "1000000px",
            height: "1000000px",
            left: 0,
            top: 0,
          }}
        ></div>
      </div>
      <div
        className="chartjs-size-monitor-shrink"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          pointerEvents: "none",
          visibility: "hidden",
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "200%",
            height: "200%",
            left: 0,
            top: 0,
          }}
        ></div>
      </div>
    </div>
  );
}
