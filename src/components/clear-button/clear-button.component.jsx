import React from 'react';

import clearIcon from '../../assets/clear-icon.png';
import clearIcon2 from '../../assets/clear-icon2.png';

import './clear-button.styles.scss';

const ClearButton = ({ handleClear, handleToggle }) => (
    <div>
        <img src={clearIcon2} alt='clear' className='clear-button' onMouseOver={e => e.target.src = clearIcon} onMouseLeave={e => e.target.src = clearIcon2} onMouseUp={handleToggle} onClick={handleClear} />
    </div>
)

export default ClearButton;