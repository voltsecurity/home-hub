import React from 'react';

import AssetsContainer from '../../components/assets-container/assets-container.component';

import { ACCESS_ASSET_DATA } from '../../database/asset-data';

import './access-control-page.styles.scss';


class AccessControlPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDB: ACCESS_ASSET_DATA,
            page: 'access'
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


export default AccessControlPage;  