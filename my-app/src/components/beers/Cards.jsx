import React from "react";
import beerImage from '../../assets/pint-of-beer-svgrepo-com.svg'
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { cropText } from '../../utils/cropText';
import './Beers.scss';
import { useDispatch, useSelector } from "react-redux";
import { setitem } from '../../store/slices/orderSlice'


const Cards = ({ beersData, inputValue }) => {

    const searchForBeer = beersData.filter(beer => {
        return beer.name.toLowerCase().includes(inputValue.toLowerCase())
    })

    const order = useSelector(state => state.orderSection.orderData)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleOpenCard = (card) => {
        navigate(`detail-page/${card.id}`)
    }

    const handleBuy = (card) => {
        if (!order.length) {
            dispatch(setitem(card))
        } else {
            let repetition = order.find(item => item.name === card.name)
            repetition === undefined ? dispatch(setitem(card)) : alert('olready in basket')
        }
    }

    return (
        <Grid container spacing={5}>
            {
                searchForBeer.map(b =>
                    <Grid key={b.id} item xs={12} md={4}>
                        <div className='cardWrapper'>
                            <div className='card'>
                                <div className='imageWrapper'>
                                    <img className='beerImage' src={b.image_url != null ? b.image_url : beerImage} alt=''></img>
                                </div>
                                <div className='inform'>
                                    <div className='beersName'>{b.name}</div>
                                    <div className='beersDescription'>{cropText(b.description, 140)}</div>
                                </div>
                            </div>
                            <div className='btns'>
                                <button
                                    className='detailBtn'
                                    onClick={() => handleOpenCard(b)}
                                >more...</button>
                                <button
                                    className='basketBtn'
                                    onClick={() => handleBuy(b)}
                                >Add to basket</button>
                            </div>
                        </div>
                    </Grid>
                )
            }
        </Grid>
    )
};

export default Cards;