import { Avatar } from "@mui/material";
import React from "react";
import "./NavbarOptions.css";
const NavbarOptions = ({ avatar, title, Icon }) => {
  return (
    <div className="navbarOption">
      {avatar && <Avatar className="navbarOption__icon" src={avatar} />}
      {Icon && <Icon className="navbarOpion__icon" />}
      <h3 className="navbarOption__title">{title}</h3>
    </div>
  );
};

export default NavbarOptions;
