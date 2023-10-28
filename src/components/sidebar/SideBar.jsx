import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//Style
import styled from "./SideBar.module.css";

//SVG
import homeSVG from "../../assets/svg/home.svg"
import cartSVG from "../../assets/svg/cart.svg"
import listSVG from "../../assets/svg/list.svg"
import homeFocusSVG from "../../assets/svg/home-focus.svg"
import cartFocusSVG from "../../assets/svg/cart-focus.svg"
import listFocusSVG from "../../assets/svg/list-focus.svg"

const SideBar = () => {

    const { pathname } = useLocation();

    return (
        <div className={styled.sideBar} >

            <div className={styled.list} >
                <Link to="/list" >
                    {
                        pathname === "/list" ?
                            <img src={listFocusSVG} alt="list photo" style={{ width: "48px" }} /> :
                            <img src={listSVG} alt="list photo" />
                    }
                </Link>
            </div>

            <div className={styled.cart} >
                <Link to="/cart" >
                    {
                        pathname === "/cart" ?
                            <img src={cartFocusSVG} alt="list photo" style={{ width: "48px" }} /> :
                            <img src={cartSVG} alt="cart photo" />
                    }
                </Link>
            </div>

            <div className={styled.home} >
                <Link to="/" >
                    {
                        pathname === "/" ?
                            <img src={homeFocusSVG} alt="list photo" style={{ width: "48px" }} /> :
                            <img src={homeSVG} alt="home photo" />
                    }
                </Link>
            </div>

        </div>
    );
};

export default SideBar;