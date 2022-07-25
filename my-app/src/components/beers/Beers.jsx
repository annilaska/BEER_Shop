import React from "react";
import s from './Beers.module.css';
import * as axios from 'axios';
import beerImage from '../../assets/mockBeer.png'



class Beers extends React.Component {

    componentDidMount() {

        axios.get('https://api.punkapi.com/v2/beers')

            .then(respoonse => {

                this.props.setBeers(respoonse.data);
            })

    }



    render() {
        return (
            <div className={s.wrapper}>
                {
                    this.props.beersData.map(u => <div key={u.id} >
                  
                        <div className={s.card}>
                            <img className={s.beerImage} src={u.image_url != null ? u.image_url : beerImage} alt=''></img>
                            <div>{u.name}</div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}




export default Beers;