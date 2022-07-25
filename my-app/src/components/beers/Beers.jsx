import React from "react";
import s from './Beers.module.css';
import * as axios from 'axios';
import beerImage from '../../assets/pint-of-beer-svgrepo-com.svg'



class Beers extends React.Component {

    componentDidMount() {

        axios.get('https://api.punkapi.com/v2/beers')

            .then(respoonse => {
                this.props.setBeers(respoonse.data);
            })

    }


    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)

        axios.get(`https://api.punkapi.com/v2/beers?page=${pageNumber}`)

            .then(respoonse => {
                this.props.setBeers(respoonse.data);
            })
    }


    cropText = (text, size) => {
        if (text.length <= size) {
          return text;
        } else {
          return text.substr(0, size) + "...";
        }
      }

    render() {
        let pages = Array(10).fill(0).map( (value, indexValue) => indexValue + 1);


        return (
            <div className={s.section}>

                <div className={s.pagesCount}>
                    {pages.map(page => {
                        return (
                            <div key={page.id} className={this.props.currentPage === page ? s.selectedPage : s.number}
                                onClick={(e) => {
                                    this.onPageChanged(page)
                                }}
                            >{page}</div>
                        )
                    })}
                </div>
                <div className={s.wrapper}>
                    {
                        this.props.beersData.map(u => <div key={u.id} >

                            <div className={s.card}>
                                <div className={s.imageWrapper}>
                                    <img className={s.beerImage} src={u.image_url != null ? u.image_url : beerImage} alt=''></img>
                                </div>
                                <div className={s.inform}>
                                    <div className={s.beersName}>{u.name}</div>
                                    <div>{this.cropText(u.description, 140)}</div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}




export default Beers;