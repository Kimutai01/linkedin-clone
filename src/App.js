import React from "react";
import "./App.css";
import Feed from "./components/feed/Feed";
import Navbar from "./components/header/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
