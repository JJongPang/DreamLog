import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/button/button';
import styles from './auth_form.module.css';

const textMap = {
    login: '로그인',
    register: '회원가입'
}


const AuthForm = ({type, form, onChange, onSubmit, error}) => {
    const text = textMap[type];
    return (
        <div className={styles.block}>
            <h3 className={styles.title}>{text}</h3>
            <form onSubmit={onSubmit}>
                <input className={styles.input_id} type="text" autoComplete="username" name="username" placeholder="아이디" onChange={onChange} value={form.username}/>
                <input className={styles.input_password} type="password" autoComplete="new-passowrd" name="password" placeholder="비밀번호" onChange={onChange} value={form.password} />
                {type === 'register' && (
                     <input className={styles.input_password} type="password" autoComplete="new-passowrd" name="passwordConfirm" placeholder="비밀번호 확인" onChange={onChange} value={form.passwordConfirm} />
                )}
                {error && <div className={styles.eroor_message}>{error}</div>}
                <Button className={styles.check_button}>{text}</Button>
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