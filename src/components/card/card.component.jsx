import React from 'react';


import { CardInfo } from '../card-info/card-info.component';
import { CardActions } from '../card-actions/card-actions.components';

import './card.styles.scss';
// import { withRouter } from 'react-router-dom';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.borderRed = {
            border: '3px solid #c03636',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 10px rgba(236, 82, 82, 0.6)'
        }

        this.borderGreen = {
            border: '3px solid #3bc036',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 236, 108, 0.6)'
        }

        this.state = {
            actionsHidden: true,
            doorStatus: 'locked',
            borderColour: this.borderRed
        }

    }

    handleCardView = (e) => {
        e.preventDefault();
        this.setState({ actionsHidden: !this.state.actionsHidden })
    }

    handleAction = (e, name) => {
        name = name.toLowerCase();
        e.stopPropagation();
        switch (name) {
            case 'unlock':
                this.setState({ doorStatus: 'unlocked' });
                break;
            case 'lock':
                this.setState({ doorStatus: 'locked' });
                break;
            case 'grant access':
                this.setState({ doorStatus: 'unlocked' });
                setTimeout(() => {
                    this.setState({ doorStatus: 'locked' })
                }, 5000);
                break;
            default:
                console.log('Default switch case');
        }
    }

    colourBorder = () => {
        const { borderRed, borderGreen } = this;
        const { borderColour, doorStatus } = this.state;
        switch (doorStatus) {
            case 'unlocked':
                return borderGreen
            case 'locked':
                return borderRed
            default:
                return borderColour;
        }
    }


    render() {
        const { item, actions, id, handleLink } = this.props;

        return (
            <div
                id={id}
                className='card'
                style={this.colourBorder()}
                onContextMenu={this.handleCardView}
                onMouseEnter={this.handleCardView}
                onMouseLeave={this.handleCardView}
            >
                <div className='card-image-container'>
                    <img className='card-image' src={item.imageUrl} alt="item" />
                </div>
                {this.state.actionsHidden ?
                    <CardInfo item={item} status={this.state.doorStatus} /> :
                    <div className='card-actions-wrapper' >
                        {
                            actions.map((action, index) => <CardActions
                                key={index}
                                item={item}
                                name={action.name}
                                action={action.action}
                                handleAction={this.handleAction}
                                handleLink={handleLink}
                            />)
                        }

                    </div>
                }
            </div >
        )
    }
}


export default Card;