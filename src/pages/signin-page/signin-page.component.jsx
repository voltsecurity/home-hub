import React from 'react';
import { Redirect } from 'react-router-dom';

import './signin-page.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInPage = ({ userIsLoggedIn }) => (
    <div className='signin-container'>
        {!userIsLoggedIn ?
            <SignIn /> :
            <Redirect to='/dashboard' />
        }
    </div>
);

export default SignInPage;