
const setBeers = 'SET_BEERS';

let initialState = {
    beersData: [],
};

const beerReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case setBeers:
            return {
                ...state,
                beersData: [...state.beersData, ...action.beers]
            }
                
        default:
            return state;
    };
};


export const setBeersAC = (beers) => ({ type: setBeers, beers });

export default beerReducer;