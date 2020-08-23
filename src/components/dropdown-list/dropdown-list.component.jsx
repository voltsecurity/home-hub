import React from 'react';

import MiniCard from '../mini-card/mini-card.component';
import SearchBox from '../search-box/search-box.component';

import './dropdown-list.styles.scss';

const DropdownList = ({ itemList, handleClick, handleHide, handleChange, handleClear, searchField }) => (
    <div className='dropdown-list-wrapper'>
        <div className='dropdown-list-back'>
            <div className='search-fixed-container'>
                <div className='search-box-drop'>
                    <SearchBox handleChange={handleChange} handleClear={handleClear} searchField={searchField} />
                </div>
            </div>
            <div className='dropdown-items'>
                {itemList.info.map((item, index) => <MiniCard handleHide={handleHide} handleClick={handleClick} key={index} item={item} index={index} fields={itemList.fields} />)}
            </div>

        </div>
    </div>
)

export default DropdownList;