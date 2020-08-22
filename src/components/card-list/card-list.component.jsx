import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.scss';


export const CardList = ({ assets, equipment, handleClick, handleMenu }) => (
    <div className='card-list-wrapper' id='card-list-wrapper'>
        <div className='card-list'>
            {equipment.map((item, index) =>
                <Card
                    handleClick={handleClick}
                    handleMenu={handleMenu}
                    assets={assets}
                    item={item}
                    id={index}
                    key={index}
                    handleLink={handleClick}
                />)}
        </div>
    </div>
)