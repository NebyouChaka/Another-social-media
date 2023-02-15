import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { socialLogin, authenticate } from '../auth';

class SocialLogin extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false
        };
    }

   

   responseGoogle = response => {
    const tokenId = response.tokenId;
    const user = {
        tokenId: tokenId
    };

    socialLogin(user).then(data => {
        console.log(data)
        if (data.error) {
            console.log('Error Login. Please try again..');
        } else {
            authenticate(data, () => {
                this.setState({ redirectToReferrer: true });
            });
        }
    });
};

    render() {
        // redirect
        const { redirectToReferrer } = this.state;
        if (redirectToReferrer) {
            return <Redirect to="/" />;
        }

        return (
            <GoogleLogin
                clientId="10801331603-ij7t1o2aq6rd5jhckrnlvkeahmva6981.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
            />
        );
    }
}

export default SocialLogin;
