import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import s from './DetailPage.module.css';
import { Button, Paper } from "@mui/material";
import { fetchdetailCardThunk } from '../../store/slices/detailSlice'
import { useDispatch, useSelector } from 'react-redux'

const DetailPage = () => {

    let params = useParams();
    const { id } = params;

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchdetailCardThunk(id))
    }, [])

    const detailBeersData = useSelector(state => state.detailSection.detailBeersData)

    return (

        <Paper elevation={3}>

            {Object.values(detailBeersData).map(item => {
                return (
                    <div key={item.id} className={s.wrapper}>
                        <div className={s.buttonBlock}>
                            <NavLink to='/'>
                                <Button color="primary">BACK</Button>
                            </NavLink>
                        </div>

                        <div className={s.topBlock}>
                            <div className={s.name}>{item.name}</div>
                        </div>
                        <div className={s.botomBlock}>
                            <div className={s.imageBlock}>
                                <img className={s.image}src={item.image_url} alt='beer' />
                            </div>
                            <div className={s.informBlock}>
                                <div className={s.description}>{item.description}</div>
                                <div className={s.tagline}>{item.tagline}</div>
                                <div className={s.abv}>{item.abv}</div>
                                <div className={s.food_pairing}>{item.food_pairing}</div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </Paper>
    )
}


export default DetailPage;










