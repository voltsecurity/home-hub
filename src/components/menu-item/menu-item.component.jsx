import React from 'react';

import './menu-item.styles.scss';

export const MenuItem = ({ name, icon }) => (
    <div className='menu-item'>
        <img className='menu-item-icon' src={icon} alt="home" />
        <div className='menu-name'>{name}</div>
    </div>
);