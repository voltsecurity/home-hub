import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { CardList } from '../card-list/card-list.component';
import { HeaderBar } from '../header-bar/header-bar.component';
import { AssetDetailed } from '../asset-detailed/asset-detailed.component'

import ErrorPage from '../../pages/error-page/error-page.component';

import ASSET_DATA from './asset-data';

import './assets-container.styles.css';


class AssetsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDB: ASSET_DATA,
            searchField: '',
            route: 'asset-list',
            assetId: ''
        }
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }

    handleClick = (item, history, match) => {
        history.push(`${match.url}/${item.cameraID.toLowerCase()}`);
    }

    handleReturn = (linkUrl) => {
        const { history, match } = this.props;
        history.push(`${match.url}${linkUrl}`)
    }

    handleGoForward = () => {
        console.log('go forward')
    }

    handleGoBack = () => {
        console.log('go back')
    }

    render() {

        const { match } = this.props
        const { itemDB, searchField } = this.state;
        const filteredItems =
            itemDB.filter(({ cameraID, brand, type, ipAddress }) => (
                cameraID.toLowerCase().includes(searchField))
                || (brand.toLowerCase().includes(searchField))
                || (type.toLowerCase().includes(searchField))
                || (ipAddress.toLowerCase().includes(searchField)))

        return (
            <div className='container'>
                <Switch>
                    <Route exact path={`${match.url}/assetlist/:assetid`}
                        render={props => (<div className='asset-container-box'>
                            <HeaderBar
                                arrows
                                goBack
                                handleReturn={this.handleReturn}
                                handleGoForward={this.handleGoForward}
                                handleGoBack={this.handleGoBack}  
                                linkUrl={'/assetlist'} />
                            <AssetDetailed
                                item={filteredItems.find(item =>
                                    item.cameraID.toLowerCase() === props.match.params.assetid
                                )}/>
                        </div>)} />
                    <Route exact path={`${match.url}/assetlist`} render={props => (
                        <div>
                            <HeaderBar searchBox
                                handleChange={this.handleChange}
                                goBack
                                handleReturn={this.handleReturn}
                                linkUrl={''} />
                            <CardList equipment={filteredItems} handleClick={this.handleClick} />
                        </div>)} />
                    <Route exact path={`${match.url}`} render={props => (
                        <div>
                            <HeaderBar />
                            <div className='asset-homepage'>HOMEPAGE</div>
                        </div>)} />
                    <Route path='' component={ErrorPage} />
                </Switch>

            </div>
        );
    }
}

export const AssetsContainerWithRouter = withRouter(AssetsContainer);

