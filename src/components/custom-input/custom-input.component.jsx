import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({ type, label, icon, value, handleChange }) => (
    <div className='custom-input-container'>
        <img className='custom-icon-image' src={icon} alt={`${label} icon`} />
        <input className='custom-icon-input' type={type} name={type} placeholder={label} value={value} onChange={handleChange} />
    </div>
);

export default CustomInput

