import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Machine } from "./components";

import "./index.css";

const App = () => {
  const [gardCount, setGardCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  return (
    <div id="app">
      <Machine
        gardCount={gardCount}
        setGardCount={() => setGardCount(gardCount + 1)}
        otherCount={otherCount}
        setOtherCount={() => setOtherCount(otherCount + 1)}
      />
      <p style={{ fontSize: "2rem", fontFamily: "impact" }}>
        You are stuck in a machine that will transform you into either Gerard
        Butler or another actor.
        <br />
        Choose wisely.
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
