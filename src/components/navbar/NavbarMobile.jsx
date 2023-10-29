import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//Style
import styled from "./NavbarMobile.module.css";

//SVG
import crossSVG from "../../assets/svg/cross.svg";

//Component
import Search from '../search/Search';

const NavbarMobile = () => {

    const {pathname} = useLocation();
    
    useEffect( () => {
        setValue("")
    } ,[pathname])

    const [ value ,setValue ] = useState("");

    const searchHandler = e => {
        setValue( e.target.value )
    }
    
    return (
        <div className={ styled.navbarMobile } >
            <input onChange={searchHandler} value={value} type="text" placeholder='Search...' />
            {!!value.length && <img src={ crossSVG } alt="cross photo" onClick={ () => setValue("") } /> }
            <Search value={value} />
        </div>
    );
};

export default NavbarMobile;