import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.scss';

export const CardList = ({ equipment, handleClick }) => (
    <div className='card-list-wrapper'>
        <div className='card-list'>
            {equipment.map((item, index) =>
                <Card handleClick={handleClick} item={item} id={index} key={index} />)}
        </div>
    </div>
)