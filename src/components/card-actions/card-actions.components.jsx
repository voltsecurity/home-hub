import React from 'react';

import './card-actions.styles.scss';

export const CardActions = ({ item, action, handleAction, handleLink }) => {
    const { name, type } = action;
    const clickAction = () => {
        if (type === 'control') {
            return (e) => handleAction(e, name)
        } else if (type === 'link') {
            return () => handleLink(item)
        } else {
            return null
        }
    }

    return (
        <div className='card-action' onClick={clickAction()} >{name}</div>
    )
}
