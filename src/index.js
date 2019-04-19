import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/combineReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { reducer as searchReducer, reduxSearch } from 'redux-search'

const store = createStore(
  combineReducers,
  compose(
  applyMiddleware(thunk),
    //delete this for IE
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

    reduxSearch({
      // Configure redux-search by telling it which resources to index for searching
      resourceIndexes: {
        // In this example Books will be searchable by :title and :author
       countries: ['title']
      },
      // This selector is responsible for returning each collection of searchable resources
      resourceSelector: (resourceName, state) => {
        // In our example, all resources are stored in the state under a :resources Map
        // For example "books" are stored under state.resources.books
        return state.resources.get(resourceName)
      }
    })
  )
);
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();

serviceWorker.unregister();
