import React from 'react';

import './menu-item.styles.scss';

export const MenuItem = ({ item, handleLink }) => (
    <div className='menu-item' onClick={() => handleLink(item.linkUrl)}>
        <img className='menu-item-icon' src={item.icon} alt="home" />
        <div className='menu-name'>{item.name}</div>
    </div>
);