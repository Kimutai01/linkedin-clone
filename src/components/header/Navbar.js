import React from "react";
import "./Navbar.css";
import { RiLinkedinFill } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import NavbarOptions from "./NavbarOptions";
import ChatIcon from "@mui/icons-material/Chat";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NotificationsIcon from "@mui/icons-material/Notifications";
import image from "../../images/kim.jpeg";
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
        <NavbarOptions Icon={BusinessCenterIcon} title="Jobs" />
        <NavbarOptions Icon={ChatIcon} title="Messaging" />
        <NavbarOptions Icon={NotificationsIcon} title="Notifications" />
        <NavbarOptions avatar={image} title="me" />
      </div>
    </div>
  );
};

export default Navbar;
