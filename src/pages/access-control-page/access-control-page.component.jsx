import React from 'react';

import './access-control-page.styles.scss';

import { AssetsContainerWithRouter } from '../../components/assets-container/assets-container.component';

import { ACCESS_ASSET_DATA } from '../../database/asset-data';

class AccessControlPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'access',
            itemDB: ACCESS_ASSET_DATA.INFO,
            actions: ACCESS_ASSET_DATA.ACTIONS
        }
    }

    render() {
        const { category, itemDB, actions } = this.state;

        return (
            <div>
                <AssetsContainerWithRouter category={category} itemDB={itemDB} actions={actions} />
            </div>
        )
    }

}


export default AccessControlPage;  