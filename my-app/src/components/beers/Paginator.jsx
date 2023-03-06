import React from "react";
import './Beers.scss';
import { fetchCardsThunk } from '../../store/slices/collectionSlice'

const Paginator = ({dispatch, currentPage, setcurrentPage}) => {

    const onPageChanged = (page) => {
        dispatch(fetchCardsThunk(page))
        setcurrentPage(page)
    };

    let pages = Array(13).fill(0).map((value, indexValue) => indexValue + 1);

    return (
        <div className='pagesCount'>
            {pages.map(page => {
                return (
                    <div key={page} className={currentPage === page ? 'selectedPageNumber' : 'pageNumber'}
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