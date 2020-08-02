import React from 'react';

import backArrow from '../../../assets/back-arrow.png';
import './forward-arrow.styles.scss';

const ForwardArrow = ( { handleGoForward, cameraId }) => (
    <img className='forward-arrow' src={backArrow} alt="back-arrow" onClick={() => handleGoForward(cameraId)} />
)

export default ForwardArrow;