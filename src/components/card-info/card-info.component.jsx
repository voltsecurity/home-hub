import React from 'react';

import './card-info.styles.scss';

export const CardInfo = ( { item, fields, noEvents, status }) => (
    <div className='card-field-container'>
            <p className='card-id'>{item.name}</p>
            <p className='card-field-one'>{status ? status.toUpperCase() : fields.deviceState}</p>
            <p className='card-field-two'>{fields.fieldOne}</p>
            { !noEvents ? <p className='card-field-three'>{fields.fieldTwo}</p> : null}
        </div>
)