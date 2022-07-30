import React from "react";
import "./Navbar.css";
import { RiLinkedinFill } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <div className="navbar">
      <h2>This is the navbar</h2>
      <div className="navbar__left">
        <RiLinkedinFill />
        <div className="navbar__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="navbar__right"></div>
    </div>
  );
};

export default Navbar;
