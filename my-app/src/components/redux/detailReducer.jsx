const setElement = 'SET_ELEMENT';

let initialState = {
    detailBeersData: [],
};

const detailReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case setElement:
            return {
                ...state,
                detailBeersData: action.element
            }

        default:
            return state;
    };
};

export const setElementAC = (element) => ({ type: setElement, element });

export default detailReducer;



