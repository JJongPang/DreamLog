import React from 'react';
import AuthForm from '../component/auth/auth_form';
import AuthTemplate from '../component/auth/auth_template';
import styles from './login_page.module.css';

const LoginPage = () => {
    return(
        <AuthTemplate>
            <AuthForm type="login" />
        </AuthTemplate>
    )
};

export default LoginPage;
