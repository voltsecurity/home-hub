import React from 'react';
import './mini-card.styles.scss';
import { withRouter } from 'react-router-dom';

const MiniCard = ({ item, index, handleClick, handleHide, history, match }) => (
    <div>
        <div key={item.cameraID} className='mini-card' onClick={() => {
            handleClick(item)
            handleHide()
            }}>
            <div className='left-container'>
                <div className='index'>#{index + 1}</div>
                <img className='image' src={item.imageUrl} alt="item" />
            </div>
            <div className='info-container'>
                <h3 className='cameraid'>{item.cameraID}</h3>
                <h5>{item.ipAddress}</h5>
                <p>{item.type}</p>
            </div>
            {/* <p>{item.model}</p> */}
        </div>
        <hr className='line-break'/>
    </div >
)

export default withRouter(MiniCard);

// ({ item, id, handleClick, history, match })
// onClick={() => handleClick(item, history, match)