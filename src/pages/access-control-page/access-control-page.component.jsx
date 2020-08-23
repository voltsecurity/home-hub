import React from 'react';

import './access-control-page.styles.scss';

import AssetsContainer from '../../components/assets-container/assets-container.component';

import { ACCESS_ASSET_DATA } from '../../database/asset-data';

class AccessControlPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDB: ACCESS_ASSET_DATA
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


export default AccessControlPage;  