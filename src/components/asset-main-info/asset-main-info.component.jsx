import React from 'react';

import { CardInfo } from '../card-info/card-info.component';

import './asset-main-info.styles.css';

const AssetMainInfo = ({ item, status }) => (
    <div className='header'>
        <img className='assetImage' src={item.imageUrl} alt="item" />
        <div className='headerInfo'>
            {/* <CardInfo item={item} status={status} /> */}
            <h2 className='id'>{item.cameraID}</h2>
            <h3 className='model'>{item.model}</h3>
            <h4 className='field1'>{item.brand}</h4>
            <h5 className='field2'>{item.type}</h5>
        </div>
    </div>
)

export default AssetMainInfo;