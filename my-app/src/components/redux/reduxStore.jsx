import { combineReducers, legacy_createStore as createStore} from 'redux';
import beerReducer from './beerReducer';
import detailReducer from './detailReducer';


let reducers = combineReducers({
    beerPage: beerReducer,
    detailPage: detailReducer
});


let store = createStore(reducers);




export default store;