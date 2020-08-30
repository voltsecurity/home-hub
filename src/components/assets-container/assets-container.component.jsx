import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { CardList } from '../card-list/card-list.component';
import { HeaderBar } from '../header-bar/header-bar.component';
import { AssetDetailed } from '../asset-detailed/asset-detailed.component'

import ErrorPage from '../../pages/error-page/error-page.component';

import { handleScrollUtil } from './assets-container.utils';


import './assets-container.styles.css';
import AssetContextActions from '../asset-context-actions/asset-context-action.component';


class AssetsContainer extends Component {
    constructor(props) {

        super(props);
        this.state = {
            searchField: '',
            assetID: '',
            contextMenu: false,
        }
    }

    assetUpdateState = (item) => {
        this.setState({ assetID: item.name.toLowerCase() })
    }

    handleChange = e => {
        this.setState({ searchField: e.target.value })
    }

    handleClick = (item) => {
        const { history, match } = this.props;
        this.setState({
            assetID: item.name.toLowerCase(),
            searchField: ''
        })
        history.push(`${match.url}/${item.name.toLowerCase()}`)
    }

    handleClear = () => {
        this.setState({ searchField: '' })
    }

    handleReturn = () => {
        const { history, match } = this.props;
        console.log(match.url)
        history.push(`${match.url}`)
    }

    handleScroll = (direction) => {
        return handleScrollUtil.call(this, direction);
    }


    render() {
        const { itemDB, page } = this.props
        const { searchField, contextMenu, position } = this.state;
        const filteredItems = Object.assign({}, itemDB);
        filteredItems.info = filteredItems.info.filter(item =>
            item.name.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div className='container' id='container'>
                <Switch>
                    <Route exact path={`/${page}/:assetid`}
                        render={props => (<div className='asset-container-box'>
                            <HeaderBar
                                pageCounter
                                arrows
                                goBack
                                dropdown
                                searchField={searchField}
                                itemList={filteredItems}
                                linkUrl={'/assetlist'}
                                length={itemDB.info.length}
                                index={itemDB.info.findIndex(item =>
                                    item.name.toLowerCase() === props.match.params.assetid
                                )}
                                handleChange={this.handleChange}
                                handleClear={this.handleClear}
                                handleReturn={this.handleReturn}
                                handleScroll={this.handleScroll}
                                handleClick={this.handleClick}
                            />
                            <AssetDetailed
                                assetUpdateState={this.assetUpdateState}
                                fields={itemDB.fields}
                                item={itemDB.info.find(item =>
                                    item.name.toLowerCase() === props.match.params.assetid
                                )} />
                        </div>)} />
                    <Route exact strict path={`/${page}`} render={props => (
                        <div>
                            <HeaderBar
                                searchField={searchField}
                                searchBox
                                clear
                                linkUrl={''}
                                handleChange={this.handleChange}
                                handleClear={this.handleClear}
                                handleReturn={this.handleReturn}
                            />
                            {contextMenu ? <AssetContextActions position={position} /> : null}
                            <CardList filteredItems={filteredItems}
                                handleClick={this.handleClick}
                                handleMenu={this.handleMenu}
                            />
                        </div>)} />
                    <Route path='' component={ErrorPage} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(AssetsContainer);

