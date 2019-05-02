import React from "react";
import ReactDOM from "react-dom";

import MovingZone from "./components/moving-zone";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>HOC example: Simple mouse inactivity detection</h1>
      <MovingZone inactivityDuration={5000} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
