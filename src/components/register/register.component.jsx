import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import CustomInput from '../custom-input/custom-input.component';
import CustomButton from '../custom-button/custom-button.components';

import { passwordMatch } from '../../utils/utils';
import { createUserProfileDocument } from '../../firebase/firebase.utils';

import emailIcon from '../../assets/mail.png';
import lockIcon from '../../assets/lock.png';
import userIcon from '../../assets/user-icon.png';

import './register.styles.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            passwordMatch: false,
            matchMessage: '',
            border: ''
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        if (name === 'confirm password') {
            this.setState({ confirmPassword: value }, () => passwordMatch.call(this, this.state.password, this.state.confirmPassword))
        } else {
            this.setState({ [name]: value });
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { username, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            return null;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { username });
            this.setState({
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
                passwordMatch: false,
                matchMessage: '',
                border: ''
            })
        } catch (error) {
            console.log(error)
        }

    }

    render() {

        const { username, email, password, confirmPassword, passwordMatch, matchMessage, border } = this.state;

        return (
            <div className='register-wrapper'>
                <form className='register-form-container' onSubmit={this.handleSubmit}>
                    <div className='register-title'>REGISTER</div>
                    <CustomInput required type='text' label='username' icon={userIcon} handleChange={this.handleChange} value={username} />
                    <CustomInput required type='email' label='email' icon={emailIcon} handleChange={this.handleChange} value={email} />
                    <CustomInput
                        required
                        type='password'
                        label='password'
                        icon={lockIcon}
                        handleChange={this.handleChange}
                        value={password}
                        border={border}
                    />
                    <CustomInput
                        required
                        type='password'
                        label='confirm password'
                        icon={lockIcon}
                        handleChange={this.handleChange}
                        value={confirmPassword}
                        border={border}
                    />
                    <span className={'match-display-message ' + (passwordMatch ? 'match-message' : 'not-match-message')}>{matchMessage}</span>
                    {/* <CustomInput type='text' label='pin code' icon={keypadIcon} /> */}
                    <CustomButton type='submit' value='REGISTER' />
                    <Link className='sign-in-link' to='signin'>Back to Login</Link>
                </form>

            </div>
        );
    }
}

export default Register;