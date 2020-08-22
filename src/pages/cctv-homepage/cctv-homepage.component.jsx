import React from 'react';
import { Route, Switch } from 'react-router';

import AssetsContainer from '../../components/assets-container/assets-container.component';
import AssetDetailedPage from '../asset-detailed-page/asset-detailed-page.component';

import { CCTV_ASSET_DATA } from '../../database/asset-data';


import './cctv-homepage.styles.scss';

const CCTVHomePage = ({ match }) => {
    const assets = CCTV_ASSET_DATA;

    return (
        <Switch>
            <Route exact path={`${match.path}`} render={() => <AssetsContainer assets={assets} />} />
            <Route path={`${match.path}/:assetId`} component={AssetDetailedPage} />
        </Switch>
    )
}




export default CCTVHomePage;