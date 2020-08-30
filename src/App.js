import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

// import { login } from './inception-api/inception.utils';

import PrivateRoute from './components/private-route/private-route.component';

import SignInPage from './pages/signin-page/signin-page.component';
import RegisterPage from './pages/register-page/register-page.component';
import Menu from './components/menu/menu.component';
import DashboardPage from './pages/dashboard-page/dashboard.component';
import CCTVHomepage from './pages/cctv-homepage/cctv-homepage.component';
import AccessHomepage from './pages/access-control-page/access-control-page.component';
import IntruderHomepage from './pages/intruder-page/intruder-page.component';
import ErrorPage from './pages/error-page/error-page.component';

import './App.scss';


class App extends Component {
    constructor() {

        super();
        this.INITIAL_STATE = {
            uid: '',
            email: '',
            displayName: '',
            userIsLoggedIn: false
        }

        this.state = this.INITIAL_STATE;
    }

    unsubscribeFromAuth = null;

    componentDidMount = async () => {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            if (user) {
                const { displayName, email, uid } = user;
                console.log(displayName, email, uid);
                this.setState({ uid, email, displayName, userIsLoggedIn: true }, () => console.log(this.state))
            } else {
                this.setState({ userIsLoggedIn: false })
                console.log('user not signed in');
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    handleSignOut = () => {
        this.setState(this.INITIAL_STATE);
    }

    render() {
        let { userIsLoggedIn, email, displayName, uid } = this.state;
        displayName = uid;

        return (
            <div className='App'>
                { !userIsLoggedIn ? 
                <Switch>
                    <Route path='/signin' render={props => <SignInPage userIsLoggedIn={userIsLoggedIn} handleSignOut={this.handleSignOut} />} />
                    <Route path='/' render={props => <SignInPage userIsLoggedIn={userIsLoggedIn} handleSignOut={this.handleSignOut} />} />
                    <Route path='/register' render={props => <RegisterPage userIsLoggedIn={userIsLoggedIn} />} />
                    <Route path='' component={ErrorPage} />
                </Switch> :
                <div className='app-menu-container'>
                    <Menu userIsLoggedIn={userIsLoggedIn} handleSignOut={this.handleSignOut} email={email} displayName={displayName} />
                    <div className='main'>
                        <Switch>
                            <PrivateRoute path='/dashboard' component={DashboardPage} userIsLoggedIn={userIsLoggedIn} />
                            <PrivateRoute path='/cctv' component={CCTVHomepage} userIsLoggedIn={userIsLoggedIn} />
                            <PrivateRoute path='/access' component={AccessHomepage} userIsLoggedIn={userIsLoggedIn} />
                            <PrivateRoute path='/intruder' component={IntruderHomepage} userIsLoggedIn={userIsLoggedIn} />
                        </Switch>
                    </div>
                </div>
            }
            </div>
        )
    }
}

export default App;
