import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Menu } from './components/menu/menu.component';
import AssetHomepage from './pages/asset-homepage/asset-homepage.component';
// import { AssetsContainer } from './components/assets-container/assets-container.component';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className='App'>
        <Menu />
        <div className='main'>
          <Switch>
            <Route path='asset-manager/assets' component={AssetHomepage} />
            <Route path=''>404</Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
