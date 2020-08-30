import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ type, value }) => (
    <div className='custom-button-wrapper'>
        <button className='custom-button' type={type} >{value}</button>
    </div>
);

export default CustomButton;