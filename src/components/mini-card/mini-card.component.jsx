import React from 'react';

import './mini-card.styles.scss';

import { withRouter } from 'react-router-dom';
import CardImage from '../card-image/card-image.component';
import { CardInfo } from '../card-info/card-info.component';

const MiniCard = ({ item, fields, handleClick, handleHide }) => (
    <div>

        <div key={item.cameraID} className='mini-card' onClick={() => {
            handleClick(item)
            handleHide()
        }}>
            <div className='left-container'>
                <div className='index'>#{item.id}</div>
                <div className='image'>
                    <CardImage item={item} />
                </div>
            </div>
            <div className='info-container'>
                <CardInfo item={item} fields={fields} noEvents/>
            </div>
            {/* <p>{item.model}</p> */}
        </div>
        <hr className='line-break' />
    </div >
)

export default withRouter(MiniCard);

// ({ item, id, handleClick, history, match })
// onClick={() => handleClick(item, history, match)