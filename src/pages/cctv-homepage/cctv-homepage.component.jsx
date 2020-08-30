import React from 'react';

import './cctv-homepage.styles.scss';

import AssetsContainer from '../../components/assets-container/assets-container.component';

import { CCTV_ASSET_DATA } from '../../database/asset-data';

class CCTVHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDB: CCTV_ASSET_DATA,
            page: 'cctv'
        }
    }

    render() {
        const { itemDB, page } = this.state;

        return (
            <div>
                <AssetsContainer itemDB={itemDB} page={page} />
            </div>
        )
    }
}


export default CCTVHomePage;