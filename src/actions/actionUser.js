import axios from 'axios';
const proxy = '/api/users';

  export const getUse = () => {
    return axios
    .get(`${proxy}`, {
      headers: {'Content-Type' : 'application/json'}
    })
    .then(res => {
      return res.data.find(user => user.login == 'Ann');
    })
    .catch(error => {
      return error;
    });
  }

 //action types
export const actionType = {
  USER_IS_LOADING: 'USER_IS_LOADING',
  USER_HAS_ERROR: 'USER_HAS_ERROR',
  USER_LOADED: 'USER_LOADED',
};

//Loaders
export const userHasError = error => {
    return {
      type: actionType.USER_HAS_ERROR,
      error: error
    };
  };
  export const userIsLoading = bool => {
    return {
      type: actionType.USER_IS_LOADING,
      isLoading: bool
    };
  };
  export const userLoaded = user => {
    return {
      type: actionType.USER_LOADED,
      user
    };
  };


      //get all users for home page
  export const getUsers = () => {
      return dispatch => {
        dispatch(userIsLoading(true));
        getUse()
          .then(users => {          
            dispatch(userLoaded(users));
          }) 
          .catch(error => {
            dispatch(userHasError(error));
          });
      };
    };