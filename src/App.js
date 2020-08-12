import React from "react";
import "./App.css";
import Routes from "./routes";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Routes></Routes>
    </div>
  );
}

export default App;
