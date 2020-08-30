import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, userIsLoggedIn, ...routeProps }) => {
    return (
        <Route {...routeProps} render={props => userIsLoggedIn ?
            <Component {...props} /> :
            <Redirect to='/' />} />
    );
}

export default PrivateRoute;