import React from "react";
import { NavLink, useParams } from "react-router-dom";
import * as axios from 'axios';
import s from './DetailPage.module.css';

const DetailPage = ({ detailBeersData, setElement }) => {

    let params = useParams();
    const { id } = params;


        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then(respoonse => {
                setElement(respoonse.data);
            })



    return (

        <div>
           <NavLink to='/'>
            <button>x</button>
            </NavLink>
            {Object.values(detailBeersData).map( l => {
                return (
                    <div className={s.name}>{l.name}</div>
                )
            })}
        </div>
    )
}

export default DetailPage;










