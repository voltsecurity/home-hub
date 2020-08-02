import React from 'react';

import backArrow from '../../../assets/back-arrow.png';

import './backward-arrow.styles.scss';

const BackwardArrow = ( { handleGoBack }) => (
    <img className='back-arrow' src={backArrow} alt="back-arrow" onClick={handleGoBack} />
)

export default BackwardArrow;