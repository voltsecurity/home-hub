import React from 'react';


import { CardInfo } from '../card-info/card-info.component';
import { CardActions } from '../card-actions/card-actions.components';

import './card.styles.scss';
// import { withRouter } from 'react-router-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionsHidden: true
        }

    }

    handleCardView = (e) => {
        e.preventDefault();
        this.setState({ actionsHidden: !this.state.actionsHidden })
    }

    handleAction = (e) => {
        e.stopPropagation();
        console.log('handleAction');
    }

    render() {
        const { item, id, handleLink } = this.props


        return (
            <div id={id} className='card' onContextMenu={this.handleCardView} onClick={this.handleCardView}>
                <div className='card-image-container'>
                    <img className='card-image' src={item.imageUrl} alt="item" />
                </div>
                {this.state.actionsHidden ? <CardInfo item={item} /> : <CardActions item={item} handleAction={this.handleAction} handleLink={handleLink} />}
            </div>
        )
    }
}


export default Card;