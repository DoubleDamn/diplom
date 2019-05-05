import { actionType }  from '../actions/actionUser';

const initState = {
  isLoading: false,
  error: false,
  user: {
    login: '',
    fav: [],
    email: '',
     _id: ''
  }
};
 
const userReducer = (state = initState, action) => {
    console.log(state)
  switch (action.type) {
    case actionType.USER_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case actionType.USER_HAS_ERROR:
      return {
        error: true,
        isLoading: false
      };
    case actionType.USER_LOADED:
      return {
        ...state,
        user: {
         _id: action.user._id,
          login: action.user.login,
          fav: action.user.fav,
          email: action.user.email,
        },
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;
