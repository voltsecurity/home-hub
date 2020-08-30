import React from 'react';
import { Link } from 'react-router-dom';
// import { auth } from '../../firebase/firebase.utils';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.components';

import emailIcon from '../../assets/mail.png';
import lockIcon from '../../assets/lock.png';
import userIcon from '../../assets/user-icon.png';

import './register.styles.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        return(
            <div className='register-wrapper'>
                <form className='register-form-container' onSubmit={this.handleSubmit}>
                    <div className='register-title'>REGISTER</div>
                    <CustomInput type='text' label='username' icon={userIcon} handleChange={this.handleChange} value={this.state.email} />
                    <CustomInput type='email' label='email' icon={emailIcon} handleChange={this.handleChange} value={this.state.email} />
                    <CustomInput type='password' label='password' icon={lockIcon} handleChange={this.handleChange} value={this.state.password} />
                    <CustomInput type='password' label='confirm password' icon={lockIcon} handleChange={this.handleChange} value={this.state.password} />
                    {/* <CustomInput type='text' label='pin code' icon={keypadIcon} /> */}
                    <CustomButton type='submit' value='REGISTER' />
                    <Link className='sign-in-link' to='signin'>Back to Login</Link>
                </form>

            </div>
        );
    }
}

export default Register;