import React from "react";
import s from './Beers.module.css';
import { fetchCardsThunk } from '../../store/slices/collectionSlice'

const Paginator = ({dispatch, currentPage, setcurrentPage}) => {

    const onPageChanged = (page) => {
        dispatch(fetchCardsThunk(page))
        setcurrentPage(page)
    };

    let pages = Array(13).fill(0).map((value, indexValue) => indexValue + 1);

    return (
        <div className={s.pagesCount}>
            {pages.map(page => {
                return (
                    <div key={page} className={currentPage === page ? s.selectedPage : s.number}
                        onClick={(e) => {
                            onPageChanged(page)
                        }}
                    >{page}</div>
                )
            })}
        </div>
    )
};

export default Paginator;