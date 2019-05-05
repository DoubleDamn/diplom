import { combineReducers} from 'redux';
import countriesReducer from './countriesReducer'
import Search from './Search'
import postReducer from './postReducer'
import userReducer from './userReducer'

export default combineReducers({
    countriesReducer,
    Search,
    postReducer,
    userReducer,

});