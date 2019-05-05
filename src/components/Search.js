import React, { Component } from 'react';
import { connect } from 'react-redux';
class Search extends Component {
  findCountry = () => {
    console.log(this.searchInput.value);
    this.props.onFindCountry(this.searchInput.value);
  };

  render() {
    console.log(this.props);
    return (
      <form className='form-inline my-2 my-lg-0'>
        <input
          className='form-control'
          type='text'
          placeholder='Поиск'
          ref={input => {
            this.searchInput = input;
          }}
        />

        <button className='btn btn-secondary search' type='submit' onClick={this.findCountry.bind(this)}>
          <i className='fas fa-search' />
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    countries: state.countriesReducer.countries.filter(country => {
      return (
        country.title.toLowerCase().includes(state.Search.toLowerCase()) ||
        country.visaType.toLowerCase().includes(state.Search.toLowerCase())
      );
    })
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFindCountry: title => {
      dispatch({ type: 'FIND_COUNTRY', payload: title });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

// const dataSearch = e => {
//     const value = e.target.value.toLowerCase();

//     const filter = data.filter(country => {
//       return country.title.toLowerCase().includes(value);
//     });

//     update({
//       data: filter,
//       active: 0,
//       term: value
//     });

//   };

//   return (
//     <div className="searchbar form-group">
//       <input
//         value={term}
//         type="text"
//         className="form-control"
//         placeholder="Search people by name..."
//         onChange={dataSearch}
//       />
//     </div>
//   );
// };
