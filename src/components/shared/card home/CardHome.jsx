import React from 'react';
import { Link } from 'react-router-dom';

//function
import { discountCount } from '../function';

//SVG
import starSVG from "../../../assets/svg/star.svg";

//Style
import styled from "./CardHome.module.css";

const CardHome = ({ product }) => {

    const { title, thumbnail: image, brand, price, rating, discountPercentage ,id } = product;

    return (
        <div className={ styled.cardHome } >
            
            <div className={ styled.cardHomeField1 } >
                <Link to={ `/details/${id}` } ><img src={image} alt="product photo" /></Link>
                <span> {brand} </span>
                <span> {discountPercentage} % </span>
            </div>

            <div className={ styled.cardHomeField2 } >
                <p> {title} </p>
                <span>
                    {rating}
                    <img src={starSVG} alt="star photo" />
                </span>
            </div>

            <div className={ styled.cardHomeField3 } >
                <span> {price} $ </span>
                <span> {discountCount(price, discountPercentage)} $ </span>
            </div>
        </div>
    );
};

export default CardHome;