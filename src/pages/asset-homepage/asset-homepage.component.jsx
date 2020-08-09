import React from 'react';

import './asset-homepage.styles.scss';

import { AssetsContainerWithRouter } from '../../components/assets-container/assets-container.component';

import { CCTV_ASSET_DATA } from '../../database/asset-data';

class AssetHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'cctv',
            itemDB: CCTV_ASSET_DATA
            
        }
    }

    render() {
        const {category, itemDB} = this.state;

        return (
            <div>
                <AssetsContainerWithRouter category={category} itemDB={itemDB}/>
            </div>
        )
    }

}


export default AssetHomePage;