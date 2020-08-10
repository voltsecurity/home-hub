import React from 'react';

import './card-actions.styles.scss';

export const CardActions = ({ handleAction, handleLink, item }) => (
    <div className='card-actions-wrapper'>
        <div className='card-action' onClick={handleAction}>Unlock Timed</div>
        <div className='card-action' onClick={handleAction}>Unlock</div>
        <div className='card-action' onClick={handleAction}>Lock</div>
        <div className='card-action' onClick={() => handleLink(item)}>Info</div>
    </div>
);