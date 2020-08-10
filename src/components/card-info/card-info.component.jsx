import React from 'react';

import './card-info.styles.scss';

export const CardInfo = ( { item, status }) => (
    <div className='card-field-container'>
            <p className='card-id'>{item.cameraID}</p>
            <p className='card-field-one'>{status.toUpperCase()}</p>
            <p className='card-field-two'>{item.brand}</p>
            <p className='card-field-three'>{item.type}</p>
        </div>
)