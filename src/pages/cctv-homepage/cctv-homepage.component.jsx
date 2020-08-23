import React from 'react';

import './cctv-homepage.styles.scss';

import AssetsContainer from '../../components/assets-container/assets-container.component';

import { CCTV_ASSET_DATA } from '../../database/asset-data';

class CCTVHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDB: CCTV_ASSET_DATA
            
        }
    }

    render() {
        const { itemDB } = this.state;

        return (
            <div>
                <AssetsContainer itemDB={itemDB} />
            </div>
        )
    }
}


export default CCTVHomePage;