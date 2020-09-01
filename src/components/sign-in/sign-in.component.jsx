import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.components';

import emailIcon from '../../assets/mail.png';
import lockIcon from '../../assets/lock.png';
// import keypadIcon from '../../assets/keypad.png';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    componentWillUnmount() {
        this.setState({ email: '', password: '' })
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in-wrapper'>
                <form className='sign-in-form-container' onSubmit={this.handleSubmit}>
                    <div className='sign-in-title'>LOGIN</div>
                    <CustomInput type='email' label='email' icon={emailIcon} handleChange={this.handleChange} value={this.state.email} />
                    <CustomInput type='password' label='password' icon={lockIcon} handleChange={this.handleChange} value={this.state.password} />
                    {/* <CustomInput type='text' label='pin code' icon={keypadIcon} /> */}
                    <CustomButton type='submit' value='SIGN IN' />
                    <Link className='register-link' to='/register'>Register</Link>
                </form>

            </div>
        )
    }
}

export default SignIn;