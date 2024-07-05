import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

import { SimpleCounter } from "./component/SimpleCounter.jsx";

let seconds = 0;
let intervalId;

// Start the counter when the page is loaded
startCounter();

// Functions to manage the counter
function stopCounter() {
  clearInterval(intervalId);
}

function resetCounter() {
  clearInterval(intervalId);
  seconds = 0;
  ReactDOM.createRoot(
    document.getElementById('app'))
    .render(<SimpleCounter seconds={seconds} startCounter={startCounter} stopCounter={stopCounter} resetCounter={resetCounter} />);
}

function startCounter() {
  intervalId = setInterval(() => {
    seconds++
    ReactDOM.createRoot(
      document.getElementById('app'))
      .render(<SimpleCounter seconds={seconds} startCounter={startCounter} stopCounter={stopCounter} resetCounter={resetCounter} />);
  }, 1000);
}