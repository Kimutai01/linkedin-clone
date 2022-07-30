import React from "react";
import "./NavbarOptions.css";
const NavbarOptions = ({ title, Icon }) => {
  return (
    <div className="navbarOption">
      {Icon && <Icon className="navbarOpion__icon" />}
      <h3 className="navbarOption__title">{title}</h3>
    </div>
  );
};

export default NavbarOptions;
