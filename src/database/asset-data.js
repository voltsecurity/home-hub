export const CCTV_ASSET_DATA = {
    info: [
        {
            imageUrl: require('../images/cctv-dome.png'),
            id: '1',
            name: 'Front Door',
        },
        {
            imageUrl: require('../images/cctv-bullet.png'),
            id: '2',
            name: 'Driveway',
        },
        {
            imageUrl: require('../images/cctv-ptz.png'),
            id: '3',
            name: 'Patio',
        },
        {
            imageUrl: require('../images/cctv-dome.png'),
            id: '4',
            name: 'Garage',
        },
    ],
    fields: {
        deviceState: '[ARM STATUS]',
        fieldOne: '[RECORDING STATUS]',
        fieldTwo: '[EVENTS]',
    },

    actions: [
        { name: 'Record', action: 'control' },
        { name: 'Stop', action: 'control' },
        { name: 'Events', action: 'control' },
        { name: 'Info', action: 'link' }
    ],
    category: 'cctv'
}


export const ACCESS_ASSET_DATA = {
    info: [
        {
            imageUrl: require('../images/access-door.png'),
            id: '1',
            name: 'Front Door',
        },
        {
            imageUrl: require('../images/access-door.png'),
            id: '2',
            name: 'Side Door',
        },
        {
            imageUrl: require('../images/access-door.png'),
            id: '3',
            name: 'Rear Door',
        },
    ],
    fields: {
        deviceState: '[POSITION]',
        fieldOne: '[STATUS]',
        fieldTwo: '[EVENTS]'
    },

    actions: [
        { name: 'Unlock', action: 'control' },
        { name: 'Lock', action: 'control' },
        { name: 'Grant Access', action: 'control' },
        { name: 'Info', action: 'link' }
    ],
    category: 'access'
}

export const INTRUDER_ASSET_DATA = {
    info: [
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '1',
            name: 'Front Door',
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '2',
            name: 'Kitchen',
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '3',
            name: 'Bedroom 1',
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '4',
            name: 'Lounge',
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '5',
            name: 'Bedroom 2',
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '6',
            name: 'Office',
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '7',
            name: 'Garage',
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '8',
            name: 'Ext PIR',
        },
    ],
    fields: {
        deviceState: '[POSITION]',
        fieldOne: '[ARM STATUS]',
        fieldTwo: '[EVENTS]'
    },
    actions: [
        { name: 'Arm', action: 'control' },
        { name: 'Disarm', action: 'control' },
        { name: 'Isolate', action: 'control' },
        { name: 'Info', action: 'link' }
    ],
    category: 'intruder'
}