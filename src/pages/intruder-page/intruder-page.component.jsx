import React from 'react';

import './intruder-page.styles.scss';

import AssetsContainer from '../../components/assets-container/assets-container.component';

import { INTRUDER_ASSET_DATA } from '../../database/asset-data';

class IntruderHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDB: INTRUDER_ASSET_DATA,
            page: 'intruder'
        }
    }

    render() {
        const { itemDB, page } = this.state;

        return (
            <div>
                <AssetsContainer itemDB={itemDB} page={page}/>
            </div>
        )
    }

}


export default IntruderHomepage;