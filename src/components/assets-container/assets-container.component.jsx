import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { CardList } from '../card-list/card-list.component';
import { HeaderBar } from '../header-bar/header-bar.component';
import { AssetDetailed } from '../asset-detailed/asset-detailed.component'

import ErrorPage from '../../pages/error-page/error-page.component';


import './assets-container.styles.css';
import AssetContextActions from '../asset-context-actions/asset-context-action.component';


class AssetsContainer extends Component {
    constructor(props) {

        super(props);
        this.state = {
            searchField: '',
            assetID: '',
            contextMenu: false,
            position: {
                x: '',
                y: ''
            }
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
        const { history, match, itemDB } = this.props;
        const { assetID } = this.state;
        let index = itemDB.findIndex(item => item.name.toLowerCase() === assetID);
        if (index < itemDB.length - 1) {
            const itemID = itemDB[(index + 1)].name.toLowerCase();
            history.push(`${match.url}/${itemID}`)
        } else {
            index = 0
            const itemID = itemDB[index].name.toLowerCase();
            history.push(`${match.url}/${itemID}`)
        }
    }


    handleGoBack = () => {
        const { history, match, itemDB } = this.props;
        const { assetID } = this.state;
        let index = itemDB.findIndex(item => item.name.toLowerCase() === assetID);
        if (index > 0) {
            const itemID = itemDB[(index - 1)].name.toLowerCase();
            history.push(`${match.url}/${itemID}`)
        } else {
            index = itemDB.length - 1;
            const itemID = itemDB[index].name.toLowerCase();
            history.push(`${match.url}/${itemID}`)
        }
    }

    handleMenu = (e) => {
        e.preventDefault();
        const element = document.getElementById('card-list-wrapper');
        const x = element.offsetLeft;
        const y = element.offsetTop;
        let posX = e.pageX
        let posY = e.pageY
        let calcPosX = e.pageX - x;
        let calcPosY = e.pageY - y;
        console.log(e.target, posX, posY, x, y, calcPosX, calcPosY);
        this.setState({
            contextMenu: true,
            position: {
                x: calcPosX,
                y: calcPosY
            }
        }, console.log(this.state))


    }



    render() {
        const { category, itemDB, actions } = this.props
        const { searchField, contextMenu, position } = this.state;
        const filteredItems =
            itemDB.filter(({ name, brand, type, ipAddress }) => (
                name.toLowerCase().includes(searchField.toLowerCase()))
                || (brand.toLowerCase().includes(searchField.toLowerCase()))
                || (type.toLowerCase().includes(searchField.toLowerCase()))
                || (ipAddress.toLowerCase().includes(searchField.toLowerCase())))

        return (
            <div className='container' id='container'>
                <Switch>
                    <Route exact path={`/${category}/:assetid`}
                        render={props => (<div className='asset-container-box'>
                            <HeaderBar
                                pageCounter
                                arrows
                                goBack
                                dropdown
                                searchField={searchField}
                                itemList={filteredItems}
                                linkUrl={'/assetlist'}
                                length={itemDB.length}
                                index={itemDB.findIndex(item =>
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
                                item={itemDB.find(item =>
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
                            {contextMenu ? <AssetContextActions position={position} /> : null}
                            <CardList equipment={filteredItems}
                                handleClick={this.handleClick}
                                handleMenu={this.handleMenu}
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

