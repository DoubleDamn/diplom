import StartPage from '../components/StartPage/StartPage';
import { connect } from 'react-redux';
import { getAll, getLength } from '../actions/action';


const mapStateToProps = state => {
  return {
    isLoading: state.countriesReducer.isLoading,
    countries: state.countriesReducer.countries,
    // page: state.countriesReducer.page,
    // loadNoMore: state.countriesReducer.loadNoMore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getLength: () => dispatch(getLength()),
    getAll: () => dispatch(getAll()),
  } 
};

const countryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StartPage);
export { countryContainer };
