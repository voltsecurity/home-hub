import React from 'react'

import AssetsContainer from '../../components/assets-container/assets-container.component';

import { CCTV_ASSET_DATA } from '../../database/asset-data';

import './dashboard.styles.scss';

class DashboardPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemDB: CCTV_ASSET_DATA,
            page: 'dashboard'
        }
    }

    render() {
        const { itemDB, page } = this.state;

        return(
            <div>
                <AssetsContainer itemDB={itemDB} page={page} />
            </div>
        )
    }
}

export default DashboardPage;