import axios from 'axios'
const proxy = '/api/countries';

export const getOne = (id) => {
    return axios
            .get(`${proxy}`, {
                headers: {'Content-Type' : 'application/json'}
            })
            .then(res => {
                return res.data.find(cont => cont.id == id);
            });
}

export const actionPost = {
    POST_IS_LOADING: 'POST_IS_LOADING',
    POST_HAS_ERROR: 'POST_HAS_ERROR',
    POST_LOADING_SUCCESS: 'POST_LOADING_SUCCESS',
}

export const postHasError = (error) => {
    return {
        type: actionPost.POST_HAS_ERROR,
        error: error,
    };
}

export const postIsLoading = (bool) => {
    return {
        type: actionPost.POST_IS_LOADING,
        isLoading: bool
    };
}

export const postLoadingSuccess = (country) => {
    return {
        type: actionPost.POST_LOADING_SUCCESS,
        country
    };
}

//get info for one country
export const getCountry = (country) => {
    return (dispatch) => {
        dispatch(postIsLoading(true));
        getOne(country)
            .then(country => {
                dispatch(postLoadingSuccess(country));
            })
            .catch((err) => {
                dispatch(postHasError(true));
            });
    };
}