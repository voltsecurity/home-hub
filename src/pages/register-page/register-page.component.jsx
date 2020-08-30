import React from 'react';
import { Redirect } from 'react-router-dom';

import './register-page.styles.scss'

import Register from '../../components/register/register.component';

const RegisterPage = ({ userIsLoggedIn }) => (
    <div className='register-page-container'>
        {!userIsLoggedIn ?
            <Register /> :
            <Redirect to='/dashboard' />
        }
    </div>
);

export default RegisterPage;