import PostCountry from '../components/PostCountry';
import { connect } from 'react-redux';
import { getCountry } from '../actions/actionPost';
import { getUsers } from '../actions/actionUser';

const mapStateToProps = (state) => ({
    isLoading: state.postReducer.isLoading,
    error: state.postReducer.error,
    country: state.postReducer.country,
    user: state.userReducer.user,  
});

const mapDispatchToProps = (dispatch) => {
    return {
        getCountry: (count) => dispatch(getCountry(count)),
        getUsers: () => dispatch(getUsers()),
        
    };
};

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(PostCountry);
export {PostContainer};