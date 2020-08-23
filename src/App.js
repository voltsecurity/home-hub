import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// import { login } from './inception-api/inception.utils';

import Menu from './components/menu/menu.component';
import CCTVHomepage from './pages/cctv-homepage/cctv-homepage.component';
import AccessHomepage from './pages/access-control-page/access-control-page.component';
import IntruderHomepage from './pages/intruder-page/intruder-page.component';
import ErrorPage from './pages/error-page/error-page.component';

import './App.scss';


class App extends Component {
    constructor() {
        super();
        this.state = {
            userID: ''
        }
    }

    componentDidMount = async () => {
        // const data = await login('Test', '#User1234!')
        // console.log(data.UserID)
        // if (this.state.userID !== data.UserID) {
        //   this.setState({userID: data.UserID})
        // }
    }

    render() {
        return (
            <div className='App'>
                <Menu />
                <div className='main'>
                    <Switch>
                        <Route path='/cctv' component={CCTVHomepage} />
                        <Route path='/access' component={AccessHomepage} />
                        <Route path='/intruder' component={IntruderHomepage} />
                        <Route path='' component={ErrorPage} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App;
