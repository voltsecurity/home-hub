import React from 'react';
import './card.styles.css';

export const Card = ({ item }) => (
    <div className='card'>
        <img src={item.imageUrl} alt="item"/>
        <h3>{item.name}</h3>
        <p className='type'><strong>Type</strong></p>
        <p>{item.type}</p>
        {/* <p>{item.model}</p> */}
    </div>
)