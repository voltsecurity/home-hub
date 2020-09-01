import React from 'react';

import './custom-input.styles.scss';

const CustomInput = ({ type, label, icon, value, handleChange, border, ...otherProps }) => (
    <div className='custom-input-container'>
        <img className='custom-icon-image' src={icon} alt={`${label} icon`} />
        <input
            {...otherProps}
            className={`custom-icon-input ${border}`}
            type={type} name={label}
            placeholder={label}
            value={value}
            onChange={handleChange} />
    </div>
);

export default CustomInput

