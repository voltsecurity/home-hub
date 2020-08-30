import React from 'react';

import { withRouter } from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import userImage from '../../assets/user-image.png';

import './user-menu-display.styles.scss';

class UserMenuDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleLink = () => {
        this.props.history.push('/signin');
    }

    handleClick = async event => {
        event.preventDefault();
        await auth.signOut()
        this.props.handleSignOut()
        this.props.history.push('/')
    }

    render() {
        const { displayName, email, userIsLoggedIn } = this.props;

        return (
            <div className='user-menu-display'>
                <img className='user-image' src={userImage} alt="user" onClick={this.handleLink} />
                <div className='user-info-container'>
                    <span className='user-name'><strong>{displayName ? displayName : null}</strong></span>
                    <span className='user-id'>{email ? email : null}</span>
                    {userIsLoggedIn ?
                        <div className='sign-link sign-out-link' onClick={this.handleClick}>SignOut</div> :
                        null}
                </div>
            </div>
        );

    }
}

export default withRouter(UserMenuDisplay);
