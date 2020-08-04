import React from 'react';

import './clear-button.styles.scss';

const ClearButton = ({ handleClear }) => (
    <div className='clear-button' onClick={handleClear}>CLEAR SEARCH</div>
)

export default ClearButton;