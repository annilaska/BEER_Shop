const setBeers = 'SET_BEERS';
const setCurrentPage = 'SET_CURRENT_PAGE';
const setInputValue = 'SET_INPUT_VALUE';

let initialState = {
    beersData: [],
    currentPage: 1,
    inputValue: ''
};

const beerReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case setBeers:
            return {
                ...state,
                beersData: action.beers
            }

        case setCurrentPage:
            return {
                ...state,
                currentPage: action.currentPage
        }
        
        case setInputValue:
            return {
                ...state,
                inputValue: action.value
        }

 
                
        default:
            return state;
    };
};


export const setBeersAC = (beers) => ({ type: setBeers, beers });
export const setCurrentPageAC = (currentPage) => ({ type: setCurrentPage, currentPage });
export const setInputValueAC = (value) => ({ type: setInputValue, value });


export default beerReducer;



