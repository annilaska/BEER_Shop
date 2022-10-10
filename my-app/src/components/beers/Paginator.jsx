import React from "react";
import s from './Beers.module.css';

const Paginator = ({setBeersT, currentPage}) => {

    const onPageChanged = (pageNumber) => {
        setBeersT(pageNumber)
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