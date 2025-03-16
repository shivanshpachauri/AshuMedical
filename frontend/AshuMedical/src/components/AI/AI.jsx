import Loading from "../Loading/Loading";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

export default function Ai() {
  const [message, setMessage] = useState("");
  const [loadingstate, setloadingstate] = useState(null);
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    try {
      setloadingstate(<Loading title="Loading answer" />);
      const res = await axios.post("http://localhost:3000/api/chat", {
        message,
      });
      const data1 = res.data;
      const data2 = data1.botReply;
      setMessage("");
      if (data2) {
        if (typeof data2 === "string") {
          setResponse(data2);
        } else if (Array.isArray(data2)) {
          setResponse(data2.join(" "));
        } else if (typeof data2 === "object") {
          setResponse(JSON.stringify(data2, null, 2));
        }
      } else {
        setResponse("No response received from bot.");
      }

      setloadingstate(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse(`Error sending message: ${error.message}`);
      setloadingstate(null);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>AI Title</h1>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          marginTop: "10px",
          backgroundColor: "lightblue",
          width: "600px",
          height: "500px",
          border: "1px solid black",
          whiteSpace: "normal", // Allow text to wrap
          overflow: "scroll",
          // overflowY: "scroll",
          // overflowX: "scroll",
        }}
      >
        {loadingstate}
        <pre style={{ fontSize: "80%", margin: "10px" }}>{response}</pre>
      </div>
      <div className="d-flex flex-row">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button className="m-2 p-2" onClick={sendMessage}>
          Submit
        </Button>
      </div>
    </div>
  );
}
