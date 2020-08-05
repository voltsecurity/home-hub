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
            assetID: ''
        }
    }



    assetUpdateState = (item) => {
        this.setState({ assetID: item.cameraID.toLowerCase() }, console.log(this.state.assetId))
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }

    handleClick = (item) => {
        const { history, match } = this.props;
        this.setState({
            assetID: item.cameraID.toLowerCase(),
            searchField: ''
        })
        history.push(`${match.url}/assetlist/${item.cameraID.toLowerCase()}`)
    }

    handleClickDropdown = (item) => {
        const { history, match } = this.props;
        this.setState({ assetID: item.cameraID.toLowerCase() })
        history.push(`${match.url}/assetlist/${item.cameraID.toLowerCase()}`)
    }

    handleClear = () => {
        this.setState({ searchField: '' })
    }

    handleReturn = (linkUrl) => {
        const { history, match } = this.props;
        history.push(`${match.url}${linkUrl}`)
    }

    handleGoForward = () => {
        const { history, match } = this.props;
        const { assetID, itemDB } = this.state;
        let index = itemDB.findIndex(item => item.cameraID.toLowerCase() === assetID);
        if (index < itemDB.length - 1) {
            const itemID = itemDB[(index + 1)].cameraID.toLowerCase();
            history.push(`${match.url}/assetlist/${itemID}`)
        } else {
            index = 0
            const itemID = itemDB[index].cameraID.toLowerCase();
            history.push(`${match.url}/assetlist/${itemID}`)
        }
    }


    handleGoBack = () => {
        const { history, match } = this.props;
        const { assetID, itemDB } = this.state;
        let index = itemDB.findIndex(item => item.cameraID.toLowerCase() === assetID);
        if (index > 0) {
            const itemID = itemDB[(index - 1)].cameraID.toLowerCase();
            history.push(`${match.url}/assetlist/${itemID}`)
        } else {
            index = itemDB.length - 1;
            const itemID = itemDB[index].cameraID.toLowerCase();
            history.push(`${match.url}/assetlist/${itemID}`)
        }
    }



    render() {
        const { match } = this.props
        const { itemDB, searchField } = this.state;
        const filteredItems =
            itemDB.filter(({ cameraID, brand, type, ipAddress }) => (
                cameraID.toLowerCase().includes(searchField.toLowerCase()))
                || (brand.toLowerCase().includes(searchField.toLowerCase()))
                || (type.toLowerCase().includes(searchField.toLowerCase()))
                || (ipAddress.toLowerCase().includes(searchField.toLowerCase())))

        return (
            <div className='container'>
                <Switch>
                    <Route exact path={`${match.url}/assetlist/:assetid`}
                        render={props => (<div className='asset-container-box'>
                            <HeaderBar
                                pageCounter
                                arrows
                                goBack
                                dropdown
                                itemList={itemDB}
                                length={itemDB.length}
                                index={itemDB.findIndex(item =>
                                    item.cameraID.toLowerCase() === props.match.params.assetid
                                )}
                                handleReturn={this.handleReturn}
                                handleGoForward={this.handleGoForward}
                                handleGoBack={this.handleGoBack}
                                handleClick={this.handleClickDropdown}
                                linkUrl={'/assetlist'} />
                            <AssetDetailed
                                assetUpdateState={this.assetUpdateState}
                                item={itemDB.find(item =>
                                    item.cameraID.toLowerCase() === props.match.params.assetid
                                )} />
                        </div>)} />
                    <Route exact strict path={`${match.url}/assetlist`} render={props => (
                        <div>
                            <HeaderBar
                                searchBox
                                goBack
                                clear
                                handleChange={this.handleChange}
                                handleClear={this.handleClear}
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

