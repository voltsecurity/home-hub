import React from 'react';
import { withRouter } from 'react-router-dom'

import { UserMenuDisplay } from '../user-menu-display/user-menu-display.component';
import { MenuItem } from '../menu-item/menu-item.component';

import MENU_ITEM_DATA from './menu-items-data';

import './menu.styles.scss'


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleLink = (linkUrl) => {
        this.props.history.push(linkUrl)
    }

    render() {
        return (
            <div className='menu' >
                <UserMenuDisplay />
                <div className='menu-items-container'>
                    {MENU_ITEM_DATA.map((item, index) =>
                        <MenuItem key={index} item={item} handleLink={this.handleLink} />)}
                </div>
            </div>
        )
    }
}

export default withRouter(Menu);