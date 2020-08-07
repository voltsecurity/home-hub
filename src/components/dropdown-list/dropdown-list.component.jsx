import React from 'react';

import MiniCard from '../mini-card/mini-card.component';
import SearchBox from '../search-box/search-box.component';

import './dropdown-list.styles.scss';

const DropdownList = ({ itemList, handleClick, handleHide }) => (
    <div className='dropdown-list-wrapper'>
        <div className='dropdown-list-back'>
            <div className='search-box'>
                <SearchBox />
            </div>
            {itemList.map((item, index) => <MiniCard handleHide={handleHide} handleClick={handleClick} key={index} item={item} index={index} />)}

        </div>
    </div>
)

export default DropdownList;