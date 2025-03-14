import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
export default function Ai() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    // const res = await fetch("http://localhost:3000/chat", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ message }),
    // });
    try {
      const res = await axios.post("http://localhost:3000/api/chat", {
        message,
      });
      console.log(res.data);

      const data = await res.data;
      setResponse(data.botReply);
    } catch (error) {
      console.error("Error sending message:", error);

      setResponse("Error sending message");
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
          backgroundColor: "lightblue",
          height: "500px",
          width: "500px",
          border: "1px solid black",
        }}
      >
        Bot: {response}
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
