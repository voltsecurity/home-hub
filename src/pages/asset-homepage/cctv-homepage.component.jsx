import React from 'react';

import './cctv-homepage.styles.scss';

import { AssetsContainerWithRouter } from '../../components/assets-container/assets-container.component';

import { CCTV_ASSET_DATA } from '../../database/asset-data';

class CCTVHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'cctv',
            itemDB: CCTV_ASSET_DATA.INFO,
            actions: CCTV_ASSET_DATA.ACTIONS
            
        }
    }

    render() {
        const {category, itemDB, actions} = this.state;

        return (
            <div>
                <AssetsContainerWithRouter category={category} itemDB={itemDB} actions={actions}/>
            </div>
        )
    }

}


export default CCTVHomePage;