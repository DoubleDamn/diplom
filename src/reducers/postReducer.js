import { actionPost } from '../actions/actionPost';

const initState = {
  isLoading: false,
  error: false,
  country: {
    id: 0,
    title: '',
    comments: [],
    visaType: '',
    description: ''
  }
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionPost.POST_IS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case actionPost.POST_HAS_ERROR:
      return {
        error: true,
        isLoading: false
      };
    case actionPost.POST_LOADING_SUCCESS:
      return {
        ...state,
        country: {
          id: action.country.id,
          title: action.country.title,
          comments: action.country.comments,
          visaType: action.country.visaType,
          description: action.country.description,
        },
        isLoading: false
      };
    default:
      return state;
  }
};

export default postReducer;
