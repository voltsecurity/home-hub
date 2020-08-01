import React from 'react';

import AssetMainInfo from '../asset-main-info/asset-main-info.component'
import AssetSubInfo from '../asset-sub-info/asset-sub-info.component'
import AssetDocuments from '../asset-documents/asset-documents.component'

import './asset-detailed.styles.css';

export const AssetDetailed = ({ item }) => (
    <div className='assetBox'>
        <AssetMainInfo item={item}/>
        <AssetSubInfo item={item}/>
        <AssetDocuments item={item}/>
    </div>
)
