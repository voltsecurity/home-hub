import React from 'react';

import './clear-button.styles.scss';

const ClearButton = ({ handleClear }) => (
    <button className='clear-button' onClick={handleClear}>CLEAR SEARCH</button>
)

export default ClearButton;