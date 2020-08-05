import React from 'react';

import userImage from '../../assets/user-image.png';

import './user-menu-display.styles.scss';

export const UserMenuDisplay = () => (
    <div className='user-menu-display'>
        <img className='user-image' src={userImage} alt="user" />
        <div className='user-info-container'>
            <span className='user-name'>User Name</span>
            <span className='user-id'>User email</span>
        </div>
        </div>
)
