import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Style
import styled from "./Cart.module.css";

//SVG
import arrowBackSVG from "../../assets/svg/arrow-back.svg";
import trashSVG from "../../assets/svg/trash.svg";

//Component
import CardCart from '../shared/card cart/CardCart';
import SpinnerEmpty from '../shared/spinner/SpinnerEmpty';

const Cart = () => {

    const { state, dispatch } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className={styled.cart} >

            <div className={styled.cartHeader} >
                <img src={arrowBackSVG} alt="arrow back photo" onClick={ () => navigate(-1) } />
                <h2>Cart</h2>
                <img src={trashSVG} alt="trash photo" onClick={ () => dispatch({ type: "CLEAR" }) } />
            </div>

            <div className={styled.cartProducts} >
                {
                    
                    state.itemsCounter == 0 && state.checkout ?
                    <div className='w-full h-full flex flex-col justify-center items-center animate-ShowScrollTop' >
                        <p className='text-white' >Payment was success</p>
                        <Link to="/" className='text-green-400 border border-green-400 text-sm px-2 rounded-md mt-2' >Continue shopping</Link>
                    </div> :

                    state.itemsCounter == 0   ?
                    <div>
                        <SpinnerEmpty />
                    </div> :
                    
                    state.selectedItems.map(product => <CardCart key={product.id} product={product} />)
                }
            </div>

            <div className={styled.cartFields} >
                <div className={styled.cartField1} >
                    <h4>Total Items :</h4>
                    <span> {state.itemsCounter} </span>
                </div>

                <div className={styled.cartField2} >
                    <h4>Total discounts :</h4>
                    <span> {! state.totalDiscounts ? 0 : state.totalDiscounts.toFixed(2)} $ </span>
                </div>

                <div className={styled.cartField3} >
                    <h4>Final price :</h4>
                    <span> {!state.totalPrice ? 0 : parseInt(state.totalPrice).toLocaleString()} $ </span>
                </div>

                <div className={styled.cartField4} >
                    {
                        state.itemsCounter ?
                        <button onClick={ () => dispatch({ type: "CHECKOUT" }) } >Checkout</button> :
                            <button type='disable' style={{ background: "rgb(74, 108, 74)" }} >Checkout d</button> 
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;