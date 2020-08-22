import React from 'react';

import './card-info.styles.scss';

const CardInfo = ({ item, status }) => {
    const { fieldOne, fieldTwo, fieldThree } = status;

    return (
        <div className='card-field-container'>
            <p className='card-id'>{item.name}</p>
            <p className='card-field-one'>{fieldOne.toUpperCase()}</p>
            <p className='card-field-two'>{fieldTwo}</p>
            <p className='card-field-three'>{fieldThree}</p>
        </div>
    );
}


export default CardInfo;

