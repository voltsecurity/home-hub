export const CCTV_ASSET_DATA = {
    INFO: [
        {
            imageUrl: require('../images/cctv-dome.png'),
            id: '1',
            name: 'Front Door',
            armStatus: '[ARM STATUS]',
            fieldOne: '[RECORDING STATUS]',
            fieldTwo: '[EVENTS]',
        },
        {
            imageUrl: require('../images/cctv-bullet.png'),
            id: '2',
            name: 'Driveway',
            armStatus: '[ARM STATUS]',
            fieldOne: '[RECORDING STATUS]',
            fieldTwo: '[EVENTS]',
        },
        {
            imageUrl: require('../images/cctv-ptz.png'),
            id: '3',
            name: 'Patio',
            armStatus: '[ARM STATUS]',
            fieldOne: '[RECORDING STATUS]',
            fieldTwo: '[EVENTS]',
        },
        {
            imageUrl: require('../images/cctv-dome.png'),
            id: '4',
            name: 'Garage',
            armStatus: '[ARM STATUS]',
            fieldOne: '[RECORDING STATUS]',
            fieldTwo: '[EVENTS]',
        },
        {
            imageUrl: require('../images/cctv-dome.png'),
            id: '1',
            name: 'Front Door',
            armStatus: '[ARM STATUS]',
            fieldOne: '[RECORDING STATUS]',
            fieldTwo: '[EVENTS]',
        },
        {
            imageUrl: require('../images/cctv-bullet.png'),
            id: '2',
            name: 'Driveway',
            armStatus: '[ARM STATUS]',
            fieldOne: '[RECORDING STATUS]',
            fieldTwo: '[EVENTS]',
        },
        {
            imageUrl: require('../images/cctv-ptz.png'),
            id: '3',
            name: 'Patio',
            armStatus: '[ARM STATUS]',
            fieldOne: '[RECORDING STATUS]',
            fieldTwo: '[EVENTS]',
        },
        {
            imageUrl: require('../images/cctv-dome.png'),
            id: '4',
            name: 'Garage',
            armStatus: '[ARM STATUS]',
            fieldOne: '[RECORDING STATUS]',
            fieldTwo: '[EVENTS]',

        },
    ],
    ACTIONS: [
        { name: 'Live', action: 'control'  },
        { name: 'Playback', action: 'control'  },
        { name: 'Events', action: 'control'  },
        { name: 'Info', action: 'link'  }
    ]
}


export const ACCESS_ASSET_DATA = {
    INFO: [
        {
            imageUrl: require('../images/access-door.png'),
            id: '1',
            name: 'Front Door',
            position: '[POSITION]',
            fieldOne: '[STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/access-door.png'),
            id: '2',
            name: 'Side Door',
            position: '[POSITION]',
            fieldOne: '[STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/access-door.png'),
            id: '3',
            name: 'Rear Door',
            position: '[POSITION]',
            fieldOne: '[STATUS]',
            fieldTwo: '[EVENTS]'
        },
    ],
    ACTIONS: [
        { name: 'Unlock', action: 'control' },
        { name: 'Lock', action: 'control'  },
        { name: 'Grant Access', action: 'control'  },
        { name: 'Info', action: 'link' }

    ]
}

export const INTRUDER_ASSET_DATA = {
    INFO: [
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '1',
            name: 'Front Door',
            status: '[POSITION]',
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '2',
            name: 'Kitchen',
            status: '[POSITION]',
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '3',
            name: 'Bedroom 1',
            status: '[POSITION]',
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '4',
            name: 'Lounge',
            status: '[POSITION]',
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '5',
            name: 'Bedroom 2',
            status: '[POSITION]',
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '6',
            name: 'Office',
            status: '[POSITION]',
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '7',
            name: 'Garage',
            status: '[POSITION]',
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[EVENTS]'
        },
        {
            imageUrl: require('../images/pir-icon.png'),
            id: '8',
            name: 'Ext PIR',
            status: '[POSITION]',
            fieldOne: '[ARM STATUS]',
            fieldTwo: '[EVENTS]'
        },
    ],
    ACTIONS: [
        { name: 'Arm', action: 'control' },
        { name: 'Disarm', action: 'control'  },
        { name: 'Isolate', action: 'control'  },
        { name: 'Info', action: 'link' }

    ]
}