import { combineReducers, applyMiddleware, legacy_createStore as createStore} from 'redux';
import beerReducer from './beerReducer';
import detailReducer from './detailReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    beerPage: beerReducer,
    detailPage: detailReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;