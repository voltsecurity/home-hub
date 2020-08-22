import React from 'react';
import { connect } from 'react-redux';

import CardInfo from '../card-info/card-info.component';
import { CardActions } from '../card-actions/card-actions.components';

import { setDoorState } from '../../redux/door/door.actions';
import { selectDoorState } from '../../redux/door/door.selectors';
import { borderGreen, borderGreenFlash, borderRed } from './card.utils';

import './card.styles.scss';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            actionsHidden: true,
            borderColour: borderRed
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
        const { item, assets, id, handleLink } = this.props;

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
                    <CardInfo item={item} status={assets.status} /> :
                    <div className='card-actions-wrapper' >
                        {
                            assets.actions.map((action, index) => <CardActions
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

const mapStateToProps = state => ({
    doorState: selectDoorState(state),
});

const mapDispatchToProps = dispatch => ({
    setDoorState: doorState => dispatch(setDoorState(doorState))
}) 


export default connect(mapStateToProps, mapDispatchToProps)(Card);