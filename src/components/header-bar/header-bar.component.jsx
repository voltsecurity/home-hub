import React from 'react';
import { SearchBox } from '../search-box/search-box.component';

import './header-bar.style.css'

export const HeaderBar = ({ searchBox, handleChange }) => (
    <div className='bar'>
        {searchBox ? <SearchBox
            placeholder={'Search'}
            handleChange={handleChange} /> : null}
    </div>
)