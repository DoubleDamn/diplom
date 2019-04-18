import axios from 'axios';
const proxy = '/api/countries';

 //action types
export const actionType = {
  DATA_IS_LOADING: 'DATA_IS_LOADING',
  DATA_HAS_ERROR: 'DATA_HAS_ERROR',
  DATA_LOADED: 'DATA_LOADED',
// //   ADD_PAGE: 'ADD_PAGE',
//  ALL_LENGTH: 'ALL_LENGTH'
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

//All Tasks
export const getDate = () => {
  return axios
  .get(proxy, {
    headers: {'Content-Type' : 'application/json'}
  })
  .then(res => {
    return res.data;
  });
}

    //get all countries for home page
export const getAll = () => {
    return dispatch => {
      dispatch(dataIsLoading(true));
      getDate()
        .then(countries => {
          dispatch(dataLoaded(countries));
        })
        .catch(error => {
          dispatch(dataHasError(error));
        });
    };
  };
//   export const AllLength = size => {
//     return {
//       type: actionType.ALL_LENGTH,
//       size
//     };
//   };

//   export const getAllLength = () => {
//     return axios
//       .get(`http://localhost:27017/travell.country`, {
//         headers: { 'Content-Type': 'application/json' }
//       })
//       .then(res => {
//         return res.data.length;
//       });
//   };
  
//   export const getLength = () => {
//     return dispatch => {
//       getAllLength().then(size => {
//         dispatch(AllLength(size));
//       });
//     };
//   };

//   //get from database
// export const getDate = ()=> {
//     // const limit = ;
// return axios
// .get(`http://localhost:27017/travell`, {
//     headers: { 'Content-Type': 'application/json' }
//   })
//   .then(resp => {
//     return resp.data;
//   })
//   .catch(error => {
//     return error;
//   });
// }



