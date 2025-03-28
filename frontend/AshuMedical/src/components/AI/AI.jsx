import Loading from "../Loading/Loading";
import { Button } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./ai.css";
import { saveAi } from "../Http/Ai/Ai";
import Sidebarai from "./Sidebarai";
import { useQueryClient } from "@tanstack/react-query";
import aiformatter from "./aiformatter";
export default function Ai() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setloading] = useState();
  const location = useLocation();
  const databaseclient = useQueryClient();
  async function savetodatabase() {
    const title = message;
    const body = response;
    await saveAi({ title, body });

    alert("submitted successfully");
    databaseclient.invalidateQueries(["fetchai"]);
  }
  const sendMessage = async () => {
    try {
      setloading(
        <Loading className="d-flex flex-row" title="Loading answer" />
      );

      const res = await axios.post("http://localhost:3000/api/chat", {
        message,
      });
      const data1 = res.data;
      const data2 = data1.botReply;
      const formatted = aiformatter(data2);
      if (formatted) {
        if (typeof formatted === "string") {
          setResponse(formatted);
        } else if (Array.isArray(formatted)) {
          setResponse(formatted.join(" "));
        } else if (typeof formatted === "object") {
          setResponse(JSON.stringify(formatted, null, 2));
        }
      } else {
        setResponse("No response received from bot.");
      }
      setloading(null);
    } catch (error) {
      console.error("Error sending message:", error);
      setResponse(`Error sending message: ${error.message}`);
      setloading(null);
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebarai />
        <main className="col">
          <Outlet />
          {/* <Customid /> */}
          {location.pathname == "/ai" && (
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h1>AI </h1>
              <div
                className="airesponse d-flex flex-column rounded shadow-lg"
                style={{
                  marginTop: "10px",
                  backgroundColor: "lightblue",
                  width: "600px",
                  height: "500px",

                  whiteSpace: "normal",
                  overflowY: "auto",
                }}
              >
                {loading}
                <div
                  className="airesponse"
                  style={{
                    fontSize: "90%",
                    overflowX: "hidden",
                    margin: "10px",
                    padding: "10px",
                    overflowWrap: "break-word",
                    fontFamily: "sans-serif",
                  }}
                  dangerouslySetInnerHTML={{ __html: response }} // Render sanitized HTML
                />
              </div>
              <div className="d-flex flex-row">
                <textarea
                  className="rounded shadow-lg m-2 p-2"
                  value={message}
                  style={{
                    width: "500px",
                    border: "none",
                    borderBottom: "1px solid black",
                  }}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div className="d-flex flex-row">
                  <Button className="m-2 p-2" onClick={sendMessage}>
                    Submit
                  </Button>
                  <Button
                    className="m-2 p-2 border-0"
                    style={{ backgroundColor: "skyblue" }}
                    onClick={savetodatabase}
                  >
                    {" "}
                    Save
                  </Button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
