import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import styles from './auth_form.module.css';

const textMap = {
    login: '로그인',
    register: '회원가입'
}


const AuthForm = ({type}) => {
    const text = textMap[type];
    return (
        <div className={styles.block}>
            <h3 className={styles.title}>{text}</h3>
            <form action="">
                <input className={styles.input_id} type="text" autoComplete="username" name="username" placeholder="아이디" />
                <input className={styles.input_password} type="password" autoComplete="new-passowrd" name="password" placeholder="비밀번호" />
                {type === 'register' && (
                     <input className={styles.input_password} type="password" autoComplete="new-passowrd" name="passwordConfirm" placeholder="비밀번호 확인" />
                )}
                <Button className={styles.login_btn}>{text}</Button>
            </form>
            <div className={styles.footer}>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ): (
                    <Link to="/login">로그인</Link>
                )}
            </div>
        </div>
    );
};

export default AuthForm;