import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Menu from './components/menu/menu.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import CCTVHomepage from './pages/cctv-homepage/cctv-homepage.component';
import AccessHomepage from './pages/access-control-page/access-control-page.component';
import IntruderHomepage from './pages/intruder-page/intruder-page.component';
import ErrorPage from './pages/error-page/error-page.component';

import './App.scss';


class App extends React.Component {
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
            <Route path='/home' component={DashboardPage} />
            <Route path='/cctv' component={CCTVHomepage} />
            <Route path='/access' component={AccessHomepage} />
            <Route path='/intruder' component={IntruderHomepage} />
            <Route path='' component={ErrorPage}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
