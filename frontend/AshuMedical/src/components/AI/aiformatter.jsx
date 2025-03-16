import React, { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const [boldText, setBoldText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleBold = () => {
    setBoldText(text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"));
  };
  return (
    <div>
      {" "}
      <input type="text" value={text} onChange={handleChange} />{" "}
      <button onClick={handleBold}>Bold</button> <p>{boldText}</p>{" "}
    </div>
  );
}
export default App;
