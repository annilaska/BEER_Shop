
import { connect } from 'react-redux';
import Beers from './Beers';
import { setBeersT, setCurrentPage, setInputValue } from '../../redux/beerReducer';

let mapStateToProps = (state) => {
 
    return {
        beersData: state.beerPage.beersData,
        currentPage: state.beerPage.currentPage,
        inputValue: state.beerPage.inputValue,
        pageSize: state.beerPage.pageSize
    }
};


const BeersContainer = connect(mapStateToProps, { 
    setBeersT, setInputValue, setCurrentPage 
})(Beers);

export default BeersContainer;