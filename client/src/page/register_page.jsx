import React from 'react';
import AuthForm from '../component/auth/auth_form';
import AuthTemplate from '../component/auth/auth_template';
import styles from './register_page.module.css';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <AuthForm type="register" />
        </AuthTemplate>
    );
};

export default RegisterPage;