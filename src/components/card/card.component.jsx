import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CardInfo } from '../card-info/card-info.component';
import { CardActions } from '../card-actions/card-actions.components';

import { setDoorState } from '../../redux/door/door.actions';
import { selectDoorState } from '../../redux/door/door.selectors';

import './card.styles.scss';

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

        this.borderGreenFlash = {
            border: '3px solid #3bc036',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.05) inset, 0px 0px 8px rgba(82, 236, 108, 0.6)',
            animation: 'blinker 1s linear infinite'
        }

        this.state = {
            actionsHidden: true,
            borderColour: this.borderRed
        }

    }

    handleCardView = (e) => {
        e.preventDefault();
        this.setState({ actionsHidden: !this.state.actionsHidden })
    }

    handleAction = (e, name) => {
        const { setDoorState, doorState } = this.props;
        name = name.toLowerCase();
        e.stopPropagation();
        switch (name) {
            case 'unlock':
                setDoorState('unlocked');
                break;
            case 'lock':
                setDoorState('locked');
                break;
            case 'grant access':
                if (doorState === 'locked') {
                    setDoorState('unlock timed');
                    setTimeout(() => {
                        setDoorState('locked')
                    }, 5000);
                }
                break;
            default:
                console.log('default switch case');
        }
    }

    colourBorder = () => {
        const { borderRed, borderGreen, borderGreenFlash } = this;
        const { borderColour } = this.state;
        switch (this.props.doorState) {
            case 'unlocked':
                return borderGreen
            case 'locked':
                return borderRed
            case 'unlock timed':
                return borderGreenFlash
            default:
                return borderColour;
        }
    }


    render() {
        console.log('rendered')
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
                    <CardInfo item={item} status={this.props.doorState} /> :
                    <div className='card-actions-wrapper' >
                        {
                            actions.map((action, index) => <CardActions
                                key={index}
                                item={item}                               
                                action={action}
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

const mapStateToProps = createStructuredSelector({
    doorState: selectDoorState
});

const mapDispatchToProps = dispatch => ({
    setDoorState: doorState => dispatch(setDoorState(doorState))
}) 


export default connect(mapStateToProps, mapDispatchToProps)(Card);