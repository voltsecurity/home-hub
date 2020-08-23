import React from 'react';

import './card-image.styles.scss';

const CardImage = ({ item }) => (
    <div className='card-image-wrapper'>
        <img className='card-image' src={item.imageUrl} alt="item" />
    </div>
);

export default CardImage;