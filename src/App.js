import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import Personal from './components/Personal';
import  PostCountry from './components/PostCountry';
import { countryContainer } from './containers/countyContainer';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Route component={Header} />
      <Switch>
        <Route exact path='/' component={countryContainer} />
        {/* <Route exact path='/news' component={Search} /> */}
        <Route exact path='/Personal' component={Personal} />
        <Route path='/post/:post_id' component={PostCountry} />
      </Switch>
    </React.Fragment>
    );
  }
}

export default App;
