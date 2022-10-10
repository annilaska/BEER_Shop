import { beersApi } from '../../api/Api';


const setBeersConst = 'SET_BEERS';
const setCurrentPageConst = 'SET_CURRENT_PAGE';
const setInputValueConst = 'SET_INPUT_VALUE';

let initialState = {
    beersData: [],
    currentPage: 1,
    inputValue: ''
};

const beerReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case setBeersConst:
            return {
                ...state,
                beersData: action.beers
            }

        case setCurrentPageConst:
            return {
                ...state,
                currentPage: action.currentPage
        }
        
        case setInputValueConst:
            return {
                ...state,
                inputValue: action.value
        }
                
        default:
            return state;
    };
};


export const setBeers = (beers) => ({ type: setBeersConst, beers });
export const setCurrentPage = (currentPage) => ({ type: setCurrentPageConst, currentPage });
export const setInputValue = (value) => ({ type: setInputValueConst, value });


export const setBeersT = (pageNumber) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    const data = await beersApi.getAllBeers(pageNumber);
    dispatch(setBeers(data));
}


export default beerReducer;



