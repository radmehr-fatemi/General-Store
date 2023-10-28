import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

//API
import { BASE_URL } from '../../server/api';

//Style
import styled from "./ProductDetails.module.css";

//SVG
import starSVG from "../../assets/svg/star.svg";

//function
import { discountCount, findQuantity } from '../shared/function';

//Context
import { CartContext } from '../../context/CartContextProvider';

//Component
import SpinnerHome from '../shared/spinner/SpinnerHome';
import SliderDetails from '../shared/slider/SliderDetails';
import ScrollToTop from '../shared/ScrollToTop';

const ProductDetails = () => {

    const [data, setData] = useState([]);
    const id = useParams().id;
    const { state, dispatch } = useContext(CartContext);

    useEffect(() => {
        const fetchAPI = async () => {
            const response = await axios.get(`${BASE_URL}/product/${id}`)
            setData(await response.data)
            console.log(state)
        }
        fetchAPI()
    }, [])

    if (!Object.keys(data).length) return <SpinnerHome />

    if (Object.keys(data).length) {
        const { title, images, category, brand, description, discountPercentage, price, rating, stock } = data;

        return <div className={styled.productDetails} >
            <div className={styled.productDetailsField1} >
                <h2> {title} </h2>
                <SliderDetails images={images} />
            </div>

            <div className={styled.productDetailsField2} >
                <p> {description} </p>
                <span> Category : {category} </span>
            </div>

            <div className={styled.productDetailsField3} >
                <span> Brand : {brand} </span>
                <span> {rating} <img src={starSVG} alt="star photo" /> </span>
            </div>

            <div className={styled.productDetailsField4} >
                <span> {discountPercentage} % </span>
                <span> {price} $ </span>
            </div>

            <div className={styled.productDetailsField5} >
                <span> {(discountCount(price, discountPercentage)).toFixed(2)} $ </span>
            </div>

            <div className={styled.productDetailsField6} >
                {
                    findQuantity(id, state.selectedItems) === 0 ?
                        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: data })} >Add to cart</button> :

                        <div className={styled.productDetailsField6Flex} >
                            <span> {`${findQuantity(id, state.selectedItems)}/${stock}`} </span>
                            <div className={styled.productDetailsField6Buttons} >
                                {findQuantity(id, state.selectedItems) > 0 && <button onClick={() => dispatch({ type: "INCREMENT", payload: data })} >+</button>}
                                <span> {findQuantity(id, state.selectedItems)} </span>
                                {findQuantity(id, state.selectedItems) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })} >R</button>}
                                {findQuantity(id, state.selectedItems) > 1 && <button onClick={() => dispatch({ type: "DECREMENT", payload: data })} >-</button>}
                            </div>
                        </div>
                }
            </div>
            <ScrollToTop />
        </div>
    }

};

export default ProductDetails;