import React from 'react';
import AuthTemplate from '../component/auth/auth_template';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default RegisterPage;