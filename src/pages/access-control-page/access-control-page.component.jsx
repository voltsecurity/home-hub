import React from 'react';
import { Route, Switch } from 'react-router';

import AssetsContainer from '../../components/assets-container/assets-container.component';
import AssetDetailedPage from '../asset-detailed-page/asset-detailed-page.component';

import { ACCESS_ASSET_DATA } from '../../database/asset-data';


import './access-control-page.styles.scss';


class AccessControlPage extends React.Component {

    render() {
        const { match } = this.props;
        const assets = ACCESS_ASSET_DATA;
        return (
            <div>
                <Switch>
                    <Route exact path={`${match.path}`} render={() => <AssetsContainer assets={assets} />} />
                    <Route path={`${match.path}/:assetId`} component={AssetDetailedPage} />
                </Switch>
            </div>
        )
    }
}


export default AccessControlPage;  