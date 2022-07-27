import React from "react";
import { NavLink, useParams } from "react-router-dom";
import * as axios from 'axios';
import s from './DetailPage.module.css';

const DetailPage = ({ detailBeersData, setElement, resetData }) => {

    let params = useParams();
    const { id } = params;


    if (detailBeersData.length === 0) {
        axios.get(`https://api.punkapi.com/v2/beers/${id}`)
            .then(respoonse => {
                setElement(respoonse.data);
            })
    }

    const handleClick = (e) => {
        resetData()
    }


    return (

        <div>

            {Object.values(detailBeersData).map(l => {
                return (
                    <div className={s.wrapper}>
                        <div className={s.buttonBlock}>
                            <NavLink to='/'>
                                <button onClick={handleClick} className={s.closeButton}>x</button>
                            </NavLink>
                        </div>

                        <div className={s.topBlock}>
                            <div className={s.name}>{l.name}</div>
                        </div>
                        <div className={s.botomBlock}>
                            <div className={s.imageBlock}>
                                <img className={s.image}src={l.image_url} alt='beer' />
                            </div>
                            <div className={s.informBlock}>
                                <div className={s.description}>{l.description}</div>
                                <div className={s.tagline}>{l.tagline}</div>
                                <div className={s.abv}>{l.abv}</div>
                                <div className={s.food_pairing}>{l.food_pairing}</div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}


export default DetailPage;










