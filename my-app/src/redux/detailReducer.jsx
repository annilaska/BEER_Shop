import { beersApi } from '../../api/Api';

const setElementConst = 'SET_ELEMENT';
const resetDataConst = 'RESET_DATA';


let initialState = {
    detailBeersData: [],
};

const detailReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case setElementConst:
            return {
                ...state,
                detailBeersData: action.element
            }

        case resetDataConst:
            return {
                ...state,
                detailBeersData: []
            }

        default:
            return state;
    };
};


export const setElement = (element) => ({ type: setElementConst, element });
export const resetData = () => ({type: resetDataConst })


export const setBeersCardT = (id) => async (dispatch) => {
    const data = await beersApi.getBeerCard(id);
    dispatch(setElement(data));
}


export default detailReducer;



