import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';

import Menu from './components/menu/menu.component';
import AssetHomepage from './pages/asset-homepage/asset-homepage.component';
import ErrorPage from './pages/error-page/error-page.component';
// import { AssetsContainer } from './components/assets-container/assets-container.component';

import './App.scss';


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
            <Route path='/home' component={AssetHomepage} />
            <Route path='' component={ErrorPage}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
