import React from 'react';
import { Route, Switch } from 'react-router';

import AssetsContainer from '../../components/assets-container/assets-container.component';
import AssetDetailedPage from '../asset-detailed-page/asset-detailed-page.component';

import { INTRUDER_ASSET_DATA } from '../../database/asset-data';

import './intruder-page.styles.scss';

const IntruderHomepage = ({ match }) => {
    const assets = INTRUDER_ASSET_DATA;

    return (
        <Switch>
            <Route exact path={`${match.path}`} render={() => <AssetsContainer assets={assets} />} />
            <Route path={`${match.path}/:assetId`} component={AssetDetailedPage} />
        </Switch>
    );
}


export default IntruderHomepage;