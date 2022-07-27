// import uniqid from 'uniqid';

const setBeers = 'SET_BEERS';
const setCurrentPage = 'SET_CURRENT_PAGE';
// const setId = 'SET_ID';
// const setName = 'SET_NAME';
// const setDescription = 'SET_DESCRIPTION';
// const setTagline = 'SET_TAG_LINE';

let initialState = {
    beersData: [],
    currentPage: 1,
    // id: 0,
    // name: '',
    // description: '',
    // tagline: '',
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
        
        // case setId:
        //     return {
        //         ...state,
        //         id: uniqid()
        // }

        // case setName:
        //     return {
        //         ...state,
        //         name: action.name
        // }

        // case setDescription:
        //     return {
        //         ...state,
        //         description: action.description
        // }

        // case setTagline:
        //     return {
        //         ...state,
        //         tagline: action.tagline
        // }
                
        default:
            return state;
    };
};


export const setBeersAC = (beers) => ({ type: setBeers, beers });
export const setCurrentPageAC = (currentPage) => ({ type: setCurrentPage, currentPage });
// export const setIdAC = () => ({ type: setId });
// export const setNameAC = (name) => ({ type: setName, name });
// export const setDescriptionAC = (description) => ({ type: setDescription, description });
// export const setTaglineAC = (tagline) => ({ type: setTagline, tagline });


export default beerReducer;



