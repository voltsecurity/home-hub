import React from 'react';

import './card-actions.styles.scss';

export const CardActions = ({ item, action, name, category, handleAction, handleLink }) => {

    const clickAction = () => {
        if (action === 'control') {
            return (e) => handleAction(e, name, category)
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
