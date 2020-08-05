import React from 'react';

import { UserMenuDisplay } from '../user-menu-display/user-menu-display.component';
import { MenuItem } from '../menu-item/menu-item.component';

import MENU_ITEM_DATA from './menu-items-data';

// import homeIcon from '../../assets/home-white.png';
// import boxIcon from '../../assets/box-white.png';
// import buildingIcon from '../../assets/building-white.png';
// import formIcon from '../../assets/form-white.png';
// import infoIcon from '../../assets/info-white.png';

import './menu.styles.scss'


export const Menu = () => (
    <div className='menu' >
        <UserMenuDisplay />
        <div className='menu-items-container'>
            {MENU_ITEM_DATA.map(item => <MenuItem name={item.name} icon={item.icon} />)}
            </div>
            <div className='disclaimer-container'>
                <div className='disclaimer'>All Rights Reserved Bitchez</div>
            </div>
    </div>
)