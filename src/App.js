import React from "react";
import "./App.css";
import Stock from "./Components/Stock";
import WebSocket from "./Components/WebSocket";

function App() {
  return (
    <div>
      <WebSocket />
      <Stock />
    </div>
  );
}

export default App;
