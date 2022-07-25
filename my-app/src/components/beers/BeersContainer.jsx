
import { connect } from 'react-redux';
import Beers from './Beers';
import { setBeersAC, setCurrentPageAC} from '../redux/beerReducer';

let mapStateToProps = (state) => {
    return {
        beersData: state.beerPage.beersData,
        currentPage: state.beerPage.currentPage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
  
        setBeers: (beers) => {
            dispatch(setBeersAC(beers))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

    }
    
}

const BeersContainer = connect(mapStateToProps, mapDispatchToProps)(Beers);

export default BeersContainer;