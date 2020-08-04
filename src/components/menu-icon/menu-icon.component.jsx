import React from "react";
import menuIcon from "../../assets/menu-icon.png";

import "./menu-icon.styles.scss";

const MenuIcon = ({ handleDrop }) => (
    <div className="menu-icon-wrapper" onClick={handleDrop}>
        <img className="menu-icon" src={menuIcon} alt="" />
    </div>
);

export default MenuIcon;
