import React, { useEffect, useState } from "react";
import './Beers.scss';

import { TextField } from "@mui/material";
import Paginator from "./Paginator";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsThunk } from '../../store/slices/collectionSlice'


const Beers = () => {

    const [currentPage, setcurrentPage] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCardsThunk(currentPage))
    }, [dispatch])

    const beersData = useSelector(state => state.collectionSection.beersData)
   
    return (
        <div className='section'>
            <TextField
                type='search'
                label='search'
                fullWidth
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <Paginator dispatch={dispatch} currentPage={currentPage} setcurrentPage={setcurrentPage} /> 
            <Cards beersData={beersData} inputValue={inputValue} />
        </div>
    )
}


export default Beers;

