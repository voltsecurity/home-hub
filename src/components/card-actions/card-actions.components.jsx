import React from 'react';

import './card-actions.styles.scss';

export const CardActions = ({ item, name, action, handleAction, handleLink }) => {
    const clickAction = () => {
        if (action === 'control') {
            return (e) => handleAction(e, name)
        } else if (action === 'link') {
            return () => handleLink(item)
        } else {
            return null
        }
    }

    return (
        <div className='card-action' onClick={clickAction()} >{name}</div>
    )
}
