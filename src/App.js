import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import Personal from './components/Personal';
import { countryContainer } from './containers/countyContainer';
import Search from './components/Search';
import { PostContainer } from './containers/postContainer';
//import { userContainer } from './containers/userContainer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Route component={Header} />
      <Switch>
        <Route exact path='/' component={countryContainer} />
        {/* <Route exact path='/news' component={Search} /> */}
        <Route exact path='/Personal' component={Personal} />
        <Route path='/post/:post_id' component={PostContainer} />
      </Switch>
    </React.Fragment>
    );
  }
}

export default App;
