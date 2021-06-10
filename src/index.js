import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Machine } from "./components";

import "./index.css";

const App = () => {
  return (
    <div id="app">
      <Machine />
      <p>
        You are stuck in a machine that will transform you into either Gerard
        Butler or another actor
      </p>
      <br />
      <p>Choose wisely</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
