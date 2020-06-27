import React from 'react';
import './card.styles.css';

export const Card = ({ item }) => (
    <div className='card'>
        <img src={item.imageUrl} alt="item"/>
        <h3 className='brand'>{item.brand}</h3>
        <h3>{item.model}</h3>
        <p className='title type'><strong>Type</strong></p>
        <p>{item.type}</p>
        <p className='title'><strong>ID</strong></p>
        <p>{item.id}</p>
        {/* <p>{item.model}</p> */}
    </div>
)