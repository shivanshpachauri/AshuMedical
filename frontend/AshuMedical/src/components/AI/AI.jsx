import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
export default function Ai() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const sendMessage = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/chat", {
        message,
      });
      const data1 = res.data;
      const data2 = data1.botReply;
      setResponse(data2);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse(`Error sending message${error}`);
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center align-content-center">
      <div className="d-flex container justify-content center">
        <h1 style={{ right: "0px", position: "relative", left: "500px" }}>
          {" "}
          Ai title
        </h1>
      </div>

      <div
        className="d-flex justify-content-center align-content-center align-items-center container"
        style={{
          marginTop: "10px",
          backgroundColor: "lightblue",
          width: "500px",
          border: "1px solid black",
          overflow: "scroll",
        }}
      >
        Bot: {response && response}
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
