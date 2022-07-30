import React from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
