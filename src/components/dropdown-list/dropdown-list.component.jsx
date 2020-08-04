import React from 'react';
import MiniCard from '../mini-card/mini-card.component';

import './dropdown-list.styles.scss';

const DropdownList = ({ itemList }) => (
    <div className='dropdown-list-wrapper'>
        <div className='dropdown-list-back'>
            {itemList.map((item, index) => <MiniCard key={indexf} item={item} index={index} />)}
            
        </div>
    </div>
)

export default DropdownList;