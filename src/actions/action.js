import axios from 'axios';
const proxy = '/api/countries';

 //action types
export const actionType = {
  DATA_IS_LOADING: 'DATA_IS_LOADING',
  DATA_HAS_ERROR: 'DATA_HAS_ERROR',
  DATA_LOADED: 'DATA_LOADED',
  ADD_PAGE: 'ADD_PAGE',
 ALL_LENGTH: 'ALL_LENGTH'
};

//Loaders
export const dataHasError = error => {
    return {
      type: actionType.DATA_HAS_ERROR,
      error: error
    };
  };
  export const dataIsLoading = bool => {
    return {
      type: actionType.DATA_IS_LOADING,
      isLoading: bool
    };
  };
  export const dataLoaded = countries => {
    return {
      type: actionType.DATA_LOADED,
      countries 
    };
  };

  export const addPage = (num=1) => {
    return {
      type: actionType.ADD_PAGE,
      page: num
    }
  }

  export const AllLength = size => {
    return {
      type: actionType.ALL_LENGTH,
      size
    };
  };

  export const getAllLength = () => {
    return axios
    .get(proxy, {
      headers: {'Content-Type' : 'application/json'}
    })
    .then(res => {
      return res.data.length;
    });
  }
  
  export const getLength = () => {
    return dispatch => {
      getAllLength()
      .then(size => { 
        dispatch(AllLength(size));
      });
    };
  };

export const getDate = (page) => {
  const limit = 2;
  return axios
  .get(`${proxy}/?limit=${limit}`, {
    headers: {'Content-Type' : 'application/json'}
  })
  .then(res => {
    return res.data;
  })
  .catch(error => {
    return error;
  });
}
    //get all countries for home page
export const getAll = (pages) => {
    return dispatch => {
      dispatch(dataIsLoading(true));
      getDate(pages)
        .then(countries => {          
          dispatch(dataLoaded(countries));
           dispatch(addPage(pages +1))
        }) 
        .catch(error => {
          dispatch(dataHasError(error));
        });
    };
  };



