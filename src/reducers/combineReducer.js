import { combineReducers} from 'redux';
import countriesReducer from './countriesReducer'

import Search from './Search'

// import postReducer from './postReducer'

export default combineReducers({
    countriesReducer,
    Search
});