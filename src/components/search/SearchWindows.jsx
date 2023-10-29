import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//Style
import styled from "./SearchWindows.module.css";

//SVG
import crossSVG from "../../assets/svg/cross.svg";

//Component
import Search from './Search';

const SearchWindows = () => {
    
    const {pathname} = useLocation();
    
    useEffect( () => {
        setValue("")
    } ,[pathname])

    const [ value ,setValue ] = useState("");

    const searchHandler = e => {
        setValue( e.target.value )
    }

    return (
        <div className={ styled.searchWindows } >
            <input onChange={searchHandler} value={value} type="text" placeholder='Search...' />
            {!!value.length && <img src={ crossSVG } alt="cross photo" onClick={ () => setValue("") } /> }
            <Search value={value} />
        </div>
    );
};

export default SearchWindows;