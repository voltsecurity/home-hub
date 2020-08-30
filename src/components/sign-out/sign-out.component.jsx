import React from 'react';
import { auth } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.components';


import './sign-out.styles.scss';

class SignOut extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        await auth.signOut()
        this.props.handleSignOut()
    }


    render() {
        return (
            <div className='sign-out-wrapper'>
                <form className='sign-out-form-container' onSubmit={this.handleSubmit}>
                    {/* <div className='sign-out-title'>LOGOUT</div> */}
                    {/* <CustomInput type='text' label='pin code' icon={keypadIcon} /> */}
                    <CustomButton type='submit' value='SIGN OUT'/>
                </form>

            </div>
        )
    }
}

export default SignOut;