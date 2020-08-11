import React from 'react';

import './card-info.styles.scss';

export const CardInfo = ( { item, status }) => (
    <div className='card-field-container'>
            <p className='card-id'>{item.name}</p>
            <p className='card-field-one'>{status.toUpperCase()}</p>
            <p className='card-field-two'>{item.fieldOne}</p>
            <p className='card-field-three'>{item.fieldTwo}</p>
        </div>
)