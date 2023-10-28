import React from 'react';

//Style
import styled from "./NavbarMobile.module.css";

//SVG
import searchSVG from "../../assets/svg/search.svg";

const NavbarMobile = () => {
    return (
        <div className={ styled.navbarMobile } >
            <input type="text" placeholder='Search...' />
        </div>
    );
};

export default NavbarMobile;