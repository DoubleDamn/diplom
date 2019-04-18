import { actionType } from '../actions/action';

const initState = {
  isLoading: false,
  error: false,
  countries: [],
  // page: 1,
  // loadNoMore: false
};

const countriesReducer = (state = initState, action) => {
  console.log( state)
  switch (action.type) {
    case actionType.DATA_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case actionType.DATA_HAS_ERROR:
      return {
        error: true,
        isLoading: false
      };
      // case actionType.ALL_LENGTH:
      // return {
      //   ...state,
      //   size: action.size
      // };
    case actionType.DATA_LOADED: 
      return {
        ...state,
        countries: [...state.countries, ...action.countries],
        isLoading: false,
        // loadNoMore: ((state.countries.length + action.countries.length) !== state.size)  ? false : true
      }
      default:
      return state;
  }
};
export default countriesReducer;