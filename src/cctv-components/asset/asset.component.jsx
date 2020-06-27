import React, { Component } from 'react';
import { CardList } from '../card-list/card-list.component';
import { SearchBox } from '../search-box/search-box.component';
import { HeaderBar } from '../header-bar/header-bar.component';
import './asset.styles.css';

const database = [
    {
        imageUrl: require('../../images/hikvision1.jpeg'),
        id: 'C001',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'Dome'
    },
    {
        imageUrl: require('../../images/hikvision2.jpeg'),
        id: 'C002',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'Bullet',
    },
    {
        imageUrl: require('../../images/hikvision3.jpeg'),
        id: 'C003',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'PTZ',
    },
    {
        imageUrl: require('../../images/hikvision1.jpeg'),
        id: 'C001',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'Dome'
    },
    {
        imageUrl: require('../../images/hikvision2.jpeg'),
        id: 'C002',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'Bullet',
    },
    {
        imageUrl: require('../../images/hikvision3.jpeg'),
        id: 'C003',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'PTZ',
    },
    {
        imageUrl: require('../../images/hikvision1.jpeg'),
        id: 'C001',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'Dome'
    },
    {
        imageUrl: require('../../images/hikvision2.jpeg'),
        id: 'C002',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'Bullet',
    },
    {
        imageUrl: require('../../images/hikvision3.jpeg'),
        id: 'C003',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'PTZ',
    },
    {
        imageUrl: require('../../images/hikvision1.jpeg'),
        id: 'C001',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'Dome'
    },
    {
        imageUrl: require('../../images/hikvision2.jpeg'),
        id: 'C002',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'Bullet',
    },
    {
        imageUrl: require('../../images/hikvision3.jpeg'),
        id: 'C003',
        brand: 'Hikvision',
        model: '[Model Name]',
        type: 'PTZ',
    },

]

export class Asset extends Component {
    constructor() {
        super();
        this.state = {
            itemDB: database,
            searchField: ''
        }
    }

    render() {
        const { itemDB, searchField } = this.state;
        const filteredItems =
            itemDB.filter(item => (item.brand.toLowerCase().includes(searchField))
                || (item.type.toLowerCase().includes(searchField)))

        return (
                <div className='main'>
                    <HeaderBar>
                        <SearchBox handleChange={e => this.setState({ searchField: e.target.value })}
                            placeholder={'Search Tools'} />
                    </HeaderBar>
                    <CardList equipment={filteredItems} />
                </div>
        )
    }
}

