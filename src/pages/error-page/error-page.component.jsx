import React from 'react';
import { Link } from 'react-router-dom';

import './error-page.styles.scss';

const ErrorPage = () => (
    <div className='error-container'>
        <span className='error-page error' >ERROR 404:</span>
        <span className='error-page not-exist' >PAGE DOES NOT EXIST</span>
        <Link className='error-page link-page' to='/'>GO TO HOMEPAGE</Link>
    </div>
)

export default ErrorPage;