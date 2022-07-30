import React from "react";
import "./Navbar.css";
import { RiLinkedinFill } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <RiLinkedinFill className="linkedin__logo" />
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
