import React from 'react';

import userImage from '../../assets/user-image.png';

import './user-menu-display.styles.scss';

export const UserMenuDisplay = () => (
    <div className='user-menu-display'>
        <img className='user-image' src={userImage} alt="user" />
        <div className='user-info-container'>
            <span className='user-name'><strong>User Name</strong></span>
            <span className='user-id'>user.email@email.com</span>
        </div>
        </div>
)
