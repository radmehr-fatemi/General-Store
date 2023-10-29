import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./CardCart.module.css";

//function
import { discountCount, shortHandler, findQuantity } from '../function';

//SVG
import starSVG from "../../../assets/svg/star.svg";
import trashSVG from "../../../assets/svg/trash.svg";

//Context
import { CartContext } from '../../../context/CartContextProvider';

const CardCart = ({ product }) => {

    const { title, thumbnail: image, price, rating, discountPercentage, id } = product;
    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styled.cardCart} >
            <div className={styled.cardCartImage} >
                <Link to={ `/details/${id}` } ><img src={image} alt="product photo" /></Link>
            </div>

            <div className={styled.cardCartFields} >
                <div className={styled.cardCartField1} >
                    <h2> {shortHandler(title, 8)}... </h2>
                    <div>
                        <span> {discountPercentage} % </span>
                        <span> {price} $ </span>
                    </div>
                </div>

                <div className={styled.cardCartField2} >
                    <span> {rating} <img src={starSVG} alt="star photo" /> </span>
                    <span> {discountCount(price, discountPercentage).toFixed(2)} $ </span>
                </div>

                <div className={styled.cardCartField3} >
                    {
                        <div className={styled.productDetailsField3Buttons} >
                            {findQuantity(id, state.selectedItems) > 0 && <button onClick={() => dispatch({ type: "INCREMENT", payload: product })} >+</button>}
                            <span> {findQuantity(id, state.selectedItems)} </span>
                            {findQuantity(id, state.selectedItems) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })} ><img src={trashSVG} alt="trash photo" /></button>}
                            {findQuantity(id, state.selectedItems) > 1 && <button onClick={() => dispatch({ type: "DECREMENT", payload: product })} >-</button>}
                        </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default CardCart;