import React from 'react';

import Card from '../card/card.component';

import './card-list.styles.scss';


export const CardList = ({ filteredItems, handleClick, actions }) => (
    <div className='card-list-wrapper' id='card-list-wrapper'>
        <div className='card-list'>
            {filteredItems.info.map( item =>
                <Card
                    // handleClick={handleClick}
                    item={item}
                    id={item.id}
                    key={item.id}
                    handleLink={handleClick}
                    actions={actions}
                    filteredItems={filteredItems}
                />)}
        </div>
    </div>
)