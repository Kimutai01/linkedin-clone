import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import back from "../../images/back.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={back} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Kiprotich kimutai</h2>
        <h4>kiprotichkimutai01@gmailcom</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statcount">500</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statcount">749</p>
        </div>
        <div className="sidebar__button">
          <p>Recent</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
