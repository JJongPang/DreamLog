import React from 'react';
import AuthForm from '../component/auth/auth_form';
import AuthTemplate from '../component/auth/auth_template';
import RegisterForm from '../containers/auth/RegisterForm';
import styles from './register_page.module.css';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;