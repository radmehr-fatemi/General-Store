import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./NavbarWindows.module.css";

//SVG
import cartSVG from "../../assets/svg/cart.svg";

const NavbarWindows = () => {
    return (
        <div className={styled.navbarWindows} >
            
            <div className={styled.navbarField1} >
                <Link>Home</Link>
                <Link>List</Link>
            </div>

            <div className={ styled.navbarField2 } >
                <Link> <h1>General Store</h1> </Link>
            </div>

            <div className={ styled.navbarField3 } >
                <img src={cartSVG} alt="cart photo" />
            </div>

        </div>
    );
};

export default NavbarWindows;