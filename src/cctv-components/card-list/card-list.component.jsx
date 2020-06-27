import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = ({ equipment }) => (
    <div className='container'>
        <div className='card-list'>
        {equipment.map(item => <Card item={item} />)}
        </div>
    </div>
)