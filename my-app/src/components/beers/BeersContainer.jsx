
import { connect } from 'react-redux';
import Beers from './Beers';
import { setBeersAC, setCurrentPageAC, setInputValueAC } from '../redux/beerReducer';

let mapStateToProps = (state) => {
    return {
        beersData: state.beerPage.beersData,
        currentPage: state.beerPage.currentPage,
        inputValue: state.beerPage.inputValue
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

        setInputValue: (value) => {
            dispatch(setInputValueAC(value))
        }

    }
    
}

const BeersContainer = connect(mapStateToProps, mapDispatchToProps)(Beers);

export default BeersContainer;