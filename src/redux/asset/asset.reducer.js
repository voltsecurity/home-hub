import { assetActionTypes } from './asset.types';

const INITIAL_STATE = {
    itemDB: {
        category: 'cctv',
        items: [
            {
                id: 1,
                imageUrl: require('../../images/cctv-dome.png'),
                name: 'Front Door',
            },
            {
                id: 2,
                imageUrl: require('../../images/cctv-bullet.png'),
                name: 'Driveway',
            },
            {
                id: 3,
                imageUrl: require('../../images/cctv-ptz.png'),
                name: 'Patio',
            },
            {
                id: 4,
                imageUrl: require('../../images/cctv-ptz.png'),
                name: 'Garage',
            },
            {
                id: 5,
                imageUrl: require('../../images/cctv-bullet.png'),
                name: 'Front Door',
            },
            {
                id: 6,
                imageUrl: require('../../images/cctv-ptz.png'),
                name: 'Driveway',
            },
            {
                id: 7,
                imageUrl: require('../../images/cctv-dome.png'),
                name: 'Patio',
            },
            {
                id: 8,
                imageUrl: require('../../images/cctv-ptz.png'),
                name: 'Garage',
            },
        ],

        status: {
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[RECORDING STATUS]',
            fieldThree: '[EVENTS]',
        },

        actions: [
            { name: 'Live', type: 'control' },
            { name: 'Playback', type: 'control' },
            { name: 'Events', type: 'control' },
            { name: 'Info', type: 'link' }
        ]
    },
    filteredItems: [],
    searchfield: ''
}

const assetReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case assetActionTypes.SET_ASSET_ITEM:
            return {
                ...state,
                itemDB: action.payload
            }
        default:
            return state;
    }
}

export default assetReducer;