import React from 'react';
import AuthForm from '../component/auth/auth_form';
import AuthTemplate from '../component/auth/auth_template';
import LoginForm from '../containers/auth/LoginForm';
import styles from './login_page.module.css';

const LoginPage = () => {
    return(
        <AuthTemplate>
            <LoginForm />
        </AuthTemplate>
    )
};

export default LoginPage;
