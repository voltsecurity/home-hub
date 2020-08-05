import React from 'react';

import './card.styles.scss';
// import { withRouter } from 'react-router-dom';

const Card = ({ item, id, handleClick }) => (
    <div id={id} className='card' onClick={() => handleClick(item)}>
        <img className='card-image' src={item.imageUrl} alt="item" />
        <div className='card-field-container'>
            <p className='card-id'>{item.cameraID}</p>
            <p className='card-field-one'>{item.model}</p>
            {/* <p className='card-field-one title'><strong>Brand</strong></p> */}
            <p className='card-field-two'>{item.brand}</p>
            {/* <p className='card-field-two title'><strong>Type</strong></p> */}
            <p className='card-field-three'>{item.type}</p>
        </div>
        {/* <p>{item.model}</p> */}
    </div>
)

export default Card;