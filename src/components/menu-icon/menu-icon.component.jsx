import React from "react";
import menuIcon from "../../assets/menu-icon.png";
import {MenuIconContainer} from "./menu-icon.styles";

const MenuIcon = ({onClick}) => {
    return <MenuIconContainer onClick={onClick}>
        <img src={menuIcon} alt='menu icon'/>
    </MenuIconContainer>
}
export default MenuIcon