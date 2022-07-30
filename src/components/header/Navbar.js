import React from "react";
import "./Navbar.css";
import { RiLinkedinFill } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NavbarOptions from "./NavbarOptions";
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
      <div className="navbar__right">
        <NavbarOptions Icon={HomeIcon} title="Home" />
        <NavbarOptions Icon={SupervisorAccountIcon} title="Network" />
      </div>
    </div>
  );
};

export default Navbar;
