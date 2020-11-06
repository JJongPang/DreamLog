import React from 'react';
import AuthTemplate from '../component/auth/auth_template';
import LoginForm from '../containers/auth/LoginForm';

const LoginPage = () => {
    return(
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    )
};

export default LoginPage;
