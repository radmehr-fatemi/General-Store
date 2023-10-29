import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./NavbarWindows.module.css";

//SVG
import cartSVG from "../../assets/svg/cart.svg";
import searchSVG from "../../assets/svg/search.svg";

const NavbarWindows = () => {
    return (
        <div className={styled.navbarWindows} >
            
            <div className={styled.navbarField1} >
                <Link to="/" >Home</Link>
                <Link to="/list" >List</Link>
                <Link to="/searchwindows" ><img src={ searchSVG } alt="search photo" className='w-8 hover:w-9 transition-all' /></Link>
            </div>

            <div className={ styled.navbarField2 } >
                <Link to="/" > <h1>General Store</h1> </Link>
            </div>

            <div className={ styled.navbarField3 } >
                <Link to="/cart" ><img src={cartSVG} alt="cart photo" /></Link>
            </div>

        </div>
    );
};

export default NavbarWindows;