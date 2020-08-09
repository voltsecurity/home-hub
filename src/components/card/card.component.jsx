import React from 'react';
import Draggable from 'react-draggable';

import './card.styles.scss';
// import { withRouter } from 'react-router-dom';

const Card = ({ item, id, handleClick, handleMenu }) => {
    const nodeRef = React.useRef(null);

    return (
        <Draggable nodeRef={nodeRef}>
            {/* <div id={id} className='card' onClick={() => handleClick(item)}> */}
            <div ref={nodeRef} id={id} className='card' onContextMenu={handleMenu}>
                <div className='card-image-container'>
                    <img className='card-image' src={item.imageUrl} alt="item" />
                </div>
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
        </Draggable>
    )
}

export default Card;