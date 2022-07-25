
const setBeers = 'SET_BEERS';
const setCurrentPage = 'SET_CURRENT_PAGE';


let initialState = {
    beersData: [],

    currentPage: 1,
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

                
        default:
            return state;
    };
};


export const setBeersAC = (beers) => ({ type: setBeers, beers });
export const setCurrentPageAC = (currentPage) => ({ type: setCurrentPage, currentPage });

export default beerReducer;



