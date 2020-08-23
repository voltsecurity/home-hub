export function handleActionUtil(e, name, category) {
    switch (category) {
        case ('access'):
            return switchAccessAction.call(this, e, name);
        case 'cctv':
            return switchCCTVAction.call(this, e, name);
        default:
            return console.log('Default switch case');
    }
}


function switchAccessAction(e, name) {
    name = name.toLowerCase();
    e.stopPropagation();
    switch (name) {
        case 'unlock':
            return this.setState({
                deviceStatus: 'unlocked',
                borderColour: borderGreen
            });
        case 'lock':
            return this.setState({
                deviceStatus: 'locked',
                borderColour: borderRed
            });
        case 'grant access':
            if (this.state.deviceStatus !== 'unlocked') {
                this.setState({
                    deviceStatus: 'unlock timed',
                    borderColour: borderGreenFlash
                });
                setTimeout(() => {
                    return this.setState({
                        deviceStatus: 'locked',
                        borderColour: borderRed
                    })
                }, 5000);
            }
            break;
        default:
            return null;
    }
}


function switchCCTVAction(e, name) {
    name = name.toLowerCase();
    e.stopPropagation();
    switch (name) {
        case 'stop':
            return this.setState({
                deviceStatus: 'not recording',
                borderColour: borderGreen
            });
        case 'record':
            return this.setState({
                deviceStatus: 'recording',
                borderColour: borderRed
            });
        default:
            return null;
    }
}


const borderRed = {
    border: '3px solid #c03636',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 10px rgba(236, 82, 82, 0.6)'
}

const borderGreen = {
    border: '3px solid #3bc036',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 236, 108, 0.6)'
}

const borderGreenFlash = {
    border: '3px solid #3bc036',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 236, 108, 0.6)',
    animation: 'blinker 1s linear infinite'
}