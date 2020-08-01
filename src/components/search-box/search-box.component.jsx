import React from 'react';
import './search-box.style.css';

export const SearchBox = ( { handleChange, placeholder }) => (
        <input onChange={handleChange} placeholder={placeholder} 
        onClick={(e) => e.target.placeholder = ''} 
        onBlur={(e) => e.target.placeholder = placeholder} 
        type="search" className='search-box'/>
)