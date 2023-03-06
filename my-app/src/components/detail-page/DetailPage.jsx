import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './DetailPage.scss';
import { Button, Paper } from "@mui/material";
import { fetchdetailCardThunk } from '../../store/slices/detailSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setitem } from '../../store/slices/orderSlice'

const DetailPage = () => {

    let params = useParams();
    const { id } = params;

    useEffect(() => {
        dispatch(fetchdetailCardThunk(id))
    }, [])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBack = () => {
        navigate('/')
    } 

    const order = useSelector(state => state.orderSection.orderData)
    const detailBeersData = useSelector(state => state.detailSection.detailBeersData)

    const handleBuy = (card) => {
        const selectItem = card[0]
        if (!order.length) {
            dispatch(setitem(selectItem))
        } else {
            let repetition = order.find(item => item.name === selectItem.name)
            repetition === undefined ? dispatch(setitem(selectItem)) : alert('olready in basket')
        }
    }

    return (
        <Paper elevation={3}>
            {Object.values(detailBeersData).map(item => {
                return (
                    <div key={item.id} className='wrapper'>
                        <Button  
                            className='closeBtn'  
                            onClick={handleBack} 
                            color="primary"
                        >BACK</Button>
                        <div className='topBlock'>{item.name}</div>
    
                        <div className='botomBlock'>
                            <div className='imageBlock'>
                                <img className='image' src={item.image_url} alt='beer' />
                            </div>
                            <div className='informBlock'>
                                <div className='description'>{item.description}</div>
                                <div className='tagline'>{item.tagline}</div>
                                <div className='abv'>{item.abv}</div>
                                <div className='food_pairing'>{item.food_pairing}</div>
                                <button
                                    className='basketBtn'
                                    onClick={() => handleBuy(detailBeersData)}
                                >Add to basket</button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </Paper>
    )
}


export default DetailPage;










