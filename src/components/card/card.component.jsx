import React from 'react';

import CardImage from '../card-image/card-image.component';
import { CardInfo } from '../card-info/card-info.component';
import { CardActions } from '../card-actions/card-actions.components';

import { handleActionUtil } from './card.utils';

import './card.styles.scss';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actionsHidden: true,
            deviceStatus: 'n/a',
            borderColour: null
        }

    }

    handleCardView = (e) => {
        e.preventDefault();
        this.setState({ actionsHidden: !this.state.actionsHidden })
    }

    handleAction = (...args) => {
        return handleActionUtil.apply(this, args)
    }


    render() {
        const { item, id, handleLink, filteredItems } = this.props;
        const { fields, actions, category } = filteredItems;

        return (
            <div
                id={id}
                className='card'
                style={this.state.borderColour}
                onMouseEnter={this.handleCardView}
                onMouseLeave={this.handleCardView}
            >
                <div className='card-image-container'>
                    <CardImage item={item} />
                </div>
                {this.state.actionsHidden ?
                    <div className='card-info-container'>
                        <CardInfo item={item} fields={fields} status={this.state.deviceStatus} />
                    </div> :
                    <div className='card-actions-wrapper' >
                        {
                            actions.map((action, index) => <CardActions
                                key={index}
                                item={item}
                                fields={fields}
                                category={category}
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