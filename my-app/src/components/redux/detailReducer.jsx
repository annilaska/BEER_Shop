const setElement = 'SET_ELEMENT';
const resetData = 'RESET_DATA';


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

        case resetData:
        return {
            ...state,
            detailBeersData: []
        }

        default:
            return state;
    };
};

export const setElementAC = (element) => ({ type: setElement, element });
export const resetDataAC = () => ({type: resetData })

export default detailReducer;



