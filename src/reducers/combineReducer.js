import { combineReducers} from 'redux';
import countriesReducer from './countriesReducer'
import { reducer as searchReducer, reduxSearch } from 'redux-search'
// import postReducer from './postReducer'

export default combineReducers({
    countriesReducer,
    search: searchReducer
});