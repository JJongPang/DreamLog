import React from 'react';
import styles from './header.module.css';
import Button from '../button/button';
import { Link } from 'react-router-dom';

const Header = ({user, onLogout}) => {
    return (
        <>
            <div className={styles.block}>
                <div className={styles.wrapper}>
                    <Link to='/' className={styles.logo}>DreamLog</Link>
                    {user ? (
                        <div className={styles.right}>
                            <div className={styles.user_info}>{user}님 꿈 을 기록하세요!</div>
                            <Button className={styles.button} onClick={onLogout}>로그아웃</Button>
                        </div>   
                    ) : (
                        <div className={styles.right}>
                            <Button className={styles.button} to='/login'>로그인</Button>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.spacer} />
        </>
    );
};

export default Header;