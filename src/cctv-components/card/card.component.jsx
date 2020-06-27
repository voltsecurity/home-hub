import React from 'react';
import './card.styles.css';

export const Card = ({ item, id, onRouteChange }) => (
    <div id={id} className='card' onClick={() => onRouteChange(id)}>
        <img src={item.imageUrl} alt="item" />
        <h3 className='cameraid'>{item.cameraID}</h3>
        <h3>{item.model}</h3>
        <p className='title fieldOne'><strong>Brand</strong></p>
        <p>{item.brand}</p>
        <p className='title'><strong>Type</strong></p>
        <p>{item.type}</p>
        {/* <p>{item.model}</p> */}
    </div>
)