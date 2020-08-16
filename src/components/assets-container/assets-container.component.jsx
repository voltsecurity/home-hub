import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { CardList } from '../card-list/card-list.component';
import { HeaderBar } from '../header-bar/header-bar.component';
import { AssetDetailed } from '../asset-detailed/asset-detailed.component'

import ErrorPage from '../../pages/error-page/error-page.component';


import './assets-container.styles.css';


class AssetsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: '',
            assetID: '',
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

    handleClickDropdown = (item) => {
        const { history, match } = this.props;
        this.setState({ assetID: item.name.toLowerCase() })
        history.push(`${match.url}/${item.name.toLowerCase()}`)
    }

    handleClear = () => {
        this.setState({ searchField: '' })
    }

    handleReturn = () => {
        const { history, match } = this.props;
        history.push(`${match.url}`)
    }

    handleGoForward = () => {
        const { history, match, items } = this.props;
        const { assetID } = this.state;
        let index = items.findIndex(item => item.name.toLowerCase() === assetID);
        if (index < items.length - 1) {
            const itemID = items[(index + 1)].name.toLowerCase();
            history.push(`${match.url}/${itemID}`)
        } else {
            index = 0
            const itemID = items[index].name.toLowerCase();
            history.push(`${match.url}/${itemID}`)
        }
    }


    handleGoBack = () => {
        const { history, match, items } = this.props;
        const { assetID } = this.state;
        let index = items.findIndex(item => item.name.toLowerCase() === assetID);
        if (index > 0) {
            const itemID = items[(index - 1)].name.toLowerCase();
            history.push(`${match.url}/${itemID}`)
        } else {
            index = items.length - 1;
            const itemID = items[index].name.toLowerCase();
            history.push(`${match.url}/${itemID}`)
        }
    }

    render() {
        const { category, items, actions, match } = this.props
        const { searchField } = this.state;
        const filteredItems =
            items.filter(({ name, brand, type, ipAddress }) => (
                name.toLowerCase().includes(searchField.toLowerCase()))
                || (brand.toLowerCase().includes(searchField.toLowerCase()))
                || (type.toLowerCase().includes(searchField.toLowerCase()))
                || (ipAddress.toLowerCase().includes(searchField.toLowerCase())))

        return (
            <div className='container' id='container'>
                <Switch>
                    <Route exact path={`/${match.path}/:assetid`}
                        render={props => (<div className='asset-container-box'>
                            <HeaderBar
                                pageCounter
                                arrows
                                goBack
                                dropdown
                                searchField={searchField}
                                itemList={filteredItems}
                                length={items.length}
                                index={items.findIndex(item =>
                                    item.name.toLowerCase() === props.match.params.assetid
                                )}
                                handleChange={this.handleChange}
                                handleClear={this.handleClear}
                                handleReturn={this.handleReturn}
                                handleGoForward={this.handleGoForward}
                                handleGoBack={this.handleGoBack}
                                handleClick={this.handleClickDropdown}
                            />
                            <AssetDetailed
                                assetUpdateState={this.assetUpdateState}
                                item={items.find(item =>
                                    item.name.toLowerCase() === props.match.params.assetid
                                )} />
                        </div>)} />
                    <Route exact strict path={`/${category}`} render={props => (
                        <div>
                            <HeaderBar
                                searchField={searchField}
                                searchBox
                                goBack
                                clear
                                linkUrl={''}
                                handleChange={this.handleChange}
                                handleClear={this.handleClear}
                                handleReturn={this.handleReturn}
                            />
                            <CardList equipment={filteredItems}
                                handleClick={this.handleClick}
                                actions={actions}
                            />
                        </div>)} />
                    <Route path='' component={ErrorPage} />
                </Switch>
            </div>
        );
    }
}

export const AssetsContainerWithRouter = withRouter(AssetsContainer);

