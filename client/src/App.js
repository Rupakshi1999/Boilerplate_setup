import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Students from "./Students";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Students />
        <a
          className="App-link"
          href="https://react.js.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
