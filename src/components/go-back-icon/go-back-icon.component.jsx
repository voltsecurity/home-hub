import React from 'react';

import goBack from '../../assets/go-back.png';

import './go-back-icon.styles.scss';


const GoBackIcon = ({ handleReturn, linkUrl}) => (
    <img className='go-back' src={goBack} alt="back-arrow" 
    onClick={() => handleReturn(linkUrl)}/>
)

export default GoBackIcon;
