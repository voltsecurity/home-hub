import React from 'react';

import './card-info.styles.scss';

export const CardInfo = ( { item }) => (
    <div className='card-field-container'>
            <p className='card-id'>{item.cameraID}</p>
            <p className='card-field-one'>{item.model}</p>
            <p className='card-field-two'>{item.brand}</p>
            <p className='card-field-three'>{item.type}</p>
        </div>
)