import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handdleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''});
    }

    handdleChange = e => {
        const { value, name} = e.target;

        this.setState({[name]: value })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your user and password</span>

                <form onSubmit={this.handdleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        handdleChange={this.handdleChange}
                        value={this.state.email}
                        required
                        label='email'
                    />
                    <FormInput 
                        onChange={this.handdleChange} 
                        name='password' 
                        type="password" 
                        value={this.state.password} 
                        required
                        label='password'
                    />

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;