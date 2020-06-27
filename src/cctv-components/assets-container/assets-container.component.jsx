import React, { Component } from 'react';
import { CardList } from '../card-list/card-list.component';
import { SearchBox } from '../search-box/search-box.component';
import { HeaderBar } from '../header-bar/header-bar.component';
import { AssetDetailed } from '../asset-detailed/asset-detailed.component'
import './assets-container.styles.css';

const database = [
    {
        imageUrl: require('../../images/hikvision1.jpeg'),
        id: '',
        cameraID: 'CRL001',
        brand: 'Hikvision',
        ipAddress: '192.168.1.100',
        model: '[Model Name]',
        type: 'Dome'
    },
    {
        imageUrl: require('../../images/hikvision2.jpeg'),
        id: '',
        cameraID: 'CRL002',
        brand: 'Hikvision',
        ipAddress: '192.168.1.101',
        model: '[Model Name]',
        type: 'Bullet',
    },
    {
        imageUrl: require('../../images/hikvision3.jpeg'),
        id: '',
        cameraID: 'CRL003',
        brand: 'Hikvision',
        ipAddress: '192.168.1.101',
        model: '[Model Name]',
        type: 'PTZ',
    },

]

export class AssetsContainer extends Component {
    constructor() {
        super();
        this.state = {
            itemDB: database,
            searchField: '',
            route: 'asset-list',
            assetID: ''
        }
    }

    onRouteChange = (route) => {
        this.setState({route: route}, console.log(route));
    }

    render() {
        const { itemDB, searchField, route } = this.state;
        const filteredItems =
            itemDB.filter(item => (item.brand.toLowerCase().includes(searchField))
                || (item.type.toLowerCase().includes(searchField)))

        return (           
            <div className='container'>
                { route === 'asset-list' ?
                <div>
                <HeaderBar>
                    <SearchBox handleChange={e => this.setState({ searchField: e.target.value })}
                        placeholder={'Search Tools'} />
                </HeaderBar>
                <CardList equipment={filteredItems} onRouteChange={this.onRouteChange} />
                </div>
                    : <div>
                        <HeaderBar>
                            <SearchBox handleChange={e => this.setState({ searchField: e.target.value })}
                                placeholder={'Search Tools'} />
                        </HeaderBar>
                        <AssetDetailed  item={itemDB[route]}/>
                        </div>
                }
            </div>
        );
    }
}

