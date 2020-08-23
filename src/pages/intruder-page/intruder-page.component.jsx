import React from 'react';

import './intruder-page.styles.scss';

import AssetsContainer from '../../components/assets-container/assets-container.component';

import { INTRUDER_ASSET_DATA } from '../../database/asset-data';

class IntruderHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDB: INTRUDER_ASSET_DATA
            
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


export default IntruderHomepage;