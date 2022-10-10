import React from "react";
import s from './Beers.module.css';
import { useEffect } from "react";
import { TextField } from "@material-ui/core";
import Paginator from "./Paginator";
import Cards from "./Cards";

const Beers = ({ setBeersT, beersData, inputValue, setInputValue, ...props }) => {

    useEffect(() => {
        setBeersT(props.currentPage)
    }, [props.currentPage])

    return (
        <div className={s.section}>
            <TextField
                type='search'
                label='search'
                fullWidth
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <Paginator setBeersT={setBeersT} currentPage={props.currentPage} />
            <Cards beersData={beersData} inputValue={inputValue} />
        </div>
    )
}


export default Beers;

