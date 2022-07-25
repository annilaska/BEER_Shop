
import { connect } from 'react-redux';
import Beers from './Beers';
import { setBeersAC } from '../redux/beerReducer';

let mapStateToProps = (state) => {
    return {
        beersData: state.beerPage.beersData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
  
        setBeers: (beers) => {
            dispatch(setBeersAC(beers))
        }
    }
    
}

const BeersContainer = connect(mapStateToProps, mapDispatchToProps)(Beers);

export default BeersContainer;