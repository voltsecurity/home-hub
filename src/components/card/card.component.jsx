import React from 'react';

import './card.styles.scss';
// import { withRouter } from 'react-router-dom';

const Card = ({ item, id, handleClick }) => (
    <div id={id} className='card' onClick={() => handleClick(item)}>
        <div className='card-image-container'>
            <img className='card-image' src={item.imageUrl} alt="item" />
        </div>
        <div className='card-field-container'>
            <p className='card-id'>{item.cameraID}</p>
            <p className='card-field-one'>{item.model}</p>
            <p className='card-field-two'>{item.brand}</p>
            <p className='card-field-three'>{item.type}</p>
        </div>
    </div>

)

export default Card;