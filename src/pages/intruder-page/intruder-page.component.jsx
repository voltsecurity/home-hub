import React from 'react';

import './intruder-page.styles.scss';

import { AssetsContainerWithRouter } from '../../components/assets-container/assets-container.component';

import { INTRUDER_ASSET_DATA } from '../../database/asset-data';

class IntruderHomepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'intruder',
            itemDB: INTRUDER_ASSET_DATA.INFO,
            actions: INTRUDER_ASSET_DATA.ACTIONS
            
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


export default IntruderHomepage;