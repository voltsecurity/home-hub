import React from 'react';
import './asset-detailed.styles.css';

export const AssetDetailed = ({ item }) => (
    <div className='assetBox'>
        <div className='header'>
            <img className='assetImage' src={item.imageUrl} alt="item" />
            <div className='headerInfo'>
                <h2 className='id'>{item.cameraID}</h2>
                <h3 className='model'>{item.model}</h3>
                <h4 className='field1'>{item.brand}</h4>
                <h5 className='field2'>{item.type}</h5>
            </div>
        </div>
        <div className='details'>
            <div className='detailBox'>
                <span className='subtitle'><strong>IP Address<strong/></strong></span>
                <span className='subvalue'>{item.ipAddress}</span>
            </div>

        </div>
    </div>
)
