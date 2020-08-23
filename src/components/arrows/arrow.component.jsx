import React from 'react';

import backArrow from '../../assets/back-arrow.png';
import './arrow.styles.scss';

const Arrow = ({ handleScroll, direction }) => (
    <img className={`${direction}-arrow`} src={backArrow} alt={`${direction}-arrow`}
        onClick={() => handleScroll(direction)} />
)

export default Arrow;