export const CCTV_ASSET_DATA = {
    category: 'cctv',
    items: [
        {
            id: 1,
            imageUrl: require('../images/cctv-dome.png'),
            name: 'Front Door',
        },
        {
            id: 2,
            imageUrl: require('../images/cctv-bullet.png'),
            name: 'Driveway',
        },
        {
            id: 3,
            imageUrl: require('../images/cctv-ptz.png'),
            name: 'Patio',
        },
        {
            id: 4,
            imageUrl: require('../images/cctv-dome.png'),
            name: 'Garage',
        },
        {
            id: 5,
            imageUrl: require('../images/cctv-dome.png'),
            name: 'Front Door',
        },
        {
            id: 6,
            imageUrl: require('../images/cctv-bullet.png'),
            name: 'Driveway',
        },
        {
            id: 7,
            imageUrl: require('../images/cctv-ptz.png'),
            name: 'Patio',
        },
        {
            id: 8,
            imageUrl: require('../images/cctv-dome.png'),
            name: 'Garage',
        },
    ],

    status: {
        armStatus: '[ARM STATUS]',
        fieldOne: '[RECORDING STATUS]',
        fieldTwo: '[EVENTS]',
    },

    actions: [
        { name: 'Live', type: 'control' },
        { name: 'Playback', type: 'control' },
        { name: 'Events', type: 'control' },
        { name: 'Info', type: 'link' }
    ]
}

export const ACCESS_ASSET_DATA = {
    category: 'access',
    items: [
        {
            id: 1,
            imageUrl: require('../images/access-door.png'),
            name: 'Front Door',
        },
        {
            id: 2,
            imageUrl: require('../images/access-door.png'),
            name: 'Side Door',
        },
        {
            id: 3,
            imageUrl: require('../images/access-door.png'),
            name: 'Rear Door',
        },
    ],

    status: {
        position: '[POSITION]',
        fieldOne: '[STATUS]',
        fieldTwo: '[EVENTS]'
    },

    actions: [
        { name: 'Unlock', type: 'control' },
        { name: 'Lock', type: 'control' },
        { name: 'Grant Access', type: 'control' },
        { name: 'Info', type: 'link' }

    ]
}

export const INTRUDER_ASSET_DATA = {
    category: 'intruder',
    items: [
        {
            id: 1,
            imageUrl: require('../images/pir-icon.png'),
            name: 'Front Door',
        },
        {
            id: 2,
            imageUrl: require('../images/pir-icon.png'),
            name: 'Kitchen',
        },
        {
            id: 3,
            imageUrl: require('../images/pir-icon.png'),
            name: 'Bedroom 1',
        },
        {
            id: 4,
            imageUrl: require('../images/pir-icon.png'),
            name: 'Lounge',
        },
        {
            id: 5,
            imageUrl: require('../images/pir-icon.png'),
            name: 'Bedroom 2',
        },
        {
            id: 6,
            imageUrl: require('../images/pir-icon.png'),
            name: 'Office',
        },
        {
            id: 7,
            imageUrl: require('../images/pir-icon.png'),
            name: 'Garage',
        },
        {
            id: 8,
            imageUrl: require('../images/pir-icon.png'),
            name: 'Ext PIR',
        },
    ],

    status: {
        status: '[POSITION]',
        fieldOne: '[ARM STATUS]',
        fieldTwo: '[EVENTS]'
    },

    actions: [
        { name: 'Arm', type: 'control' },
        { name: 'Disarm', type: 'control' },
        { name: 'Isolate', type: 'control' },
        { name: 'Info', type: 'link' }

    ]
}