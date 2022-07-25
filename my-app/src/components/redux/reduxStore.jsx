import { combineReducers, legacy_createStore as createStore} from 'redux';
import beerReducer from './beerReducer';


let reducers = combineReducers({
    beerPage: beerReducer
});


let store = createStore(reducers);




export default store;