import React from "react";
import beerImage from '../../assets/pint-of-beer-svgrepo-com.svg'
import { NavLink } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { cropText } from '../../utils/cropText';
import s from './Beers.module.css';

const Cards = ({beersData, inputValue}) => {

    const searchForBeer = beersData.filter(beer => {
        return beer.name.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <Grid container spacing={2}>
            {
                searchForBeer.map(b =>
                    <Grid key={b.id} item xs={12} md={4}>
                        <div className={s.cardWrapper}>
                        <div className={s.card}>
                            <div className={s.imageWrapper}>
                                <img className={s.beerImage} src={b.image_url != null ? b.image_url : beerImage} alt=''></img>
                            </div>
                            <div className={s.inform}>
                                <div className={s.beersName}>{b.name}</div>
                                <div className={s.beersDescription}>{cropText(b.description, 140)}</div>
                            </div>
                        </div>
                        <Button href="#text-buttons" color="primary" size="small">
                            <NavLink className={s.link} to={`detail-page/${b.id}`}>More...</NavLink>
                        </Button>
                        </div>
                    </Grid>
                )
            }
        </Grid>
    )
};

export default Cards;