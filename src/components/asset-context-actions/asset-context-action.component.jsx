import React from 'react';

import './asset-context-actions.styles.scss';

class AssetContextActions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }




    render() {
        const { position } = this.props;

        return (
            <div className='asset-context-actions-wrapper'>
                <div className='actions-menu' style={{left: position.x + 'px', top: position.y + 'px'}}>

                </div>
            </div>

        )
    }
}

export default AssetContextActions;