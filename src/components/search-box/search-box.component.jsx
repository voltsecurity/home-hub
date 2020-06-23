import React from 'react';
import './search-box.style.css';

export const SearchBox = ( { handleChange, placeholder }) => (
        <input onChange={handleChange} placeholder={placeholder} type="search" className='search-box'/>
)