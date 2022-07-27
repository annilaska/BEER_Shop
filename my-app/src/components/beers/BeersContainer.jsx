
import { connect } from 'react-redux';
import Beers from './Beers';
import { setBeersAC, setCurrentPageAC, setIdAC, setNameAC, setDescriptionAC, setTaglineAC } from '../redux/beerReducer';

let mapStateToProps = (state) => {
    return {
        beersData: state.beerPage.beersData,
        currentPage: state.beerPage.currentPage,
        id: state.beerPage.id
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

        // setId: () => {
        //     dispatch(setIdAC())
        // },

        // setName: (name) => {
        //     dispatch(setNameAC(name))
        // },

        // setDescription: (description) => {
        //     dispatch(setDescriptionAC(description))
        // },

        // setTagline: (tagline) => {
        //     dispatch(setTaglineAC(tagline))
        // },

    }
    
}

const BeersContainer = connect(mapStateToProps, mapDispatchToProps)(Beers);

export default BeersContainer;