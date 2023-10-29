import React, { useContext } from 'react';
import { Link ,Outlet } from 'react-router-dom';

//Style
import styled from "./List.module.css";

//Context
import { ListsContext } from '../../context/ListsContextProvider';

//Component
import SpinnerHome from '../shared/spinner/SpinnerHome';
import SpinnerError from '../shared/spinner/SpinnerHomeError';

const List = () => {

    const { data:categories ,loading ,error } = useContext( ListsContext ).state;

    if ( loading ) return <SpinnerHome />
    if ( error ) return <SpinnerError />

    if ( categories.length ) {
        return <div className={ styled.list } >
            <h1>Categories</h1>
            <Outlet />
            {
                categories.map( ( category ,index ) => <Link onClick={ () => scroll(0 ,0) } to={`${category}`} key={index} > { category } </Link> )
            }
        </div>
    }
};

export default List;