import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = ({ equipment, onRouteChange }) => (
    <div className='container'>
        <div className='card-list'>
        {equipment.map((item, index) => <Card onRouteChange={onRouteChange} item={item} id={index} key={index}/>)}
        </div>
    </div>
)