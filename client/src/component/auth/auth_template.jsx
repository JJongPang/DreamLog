import React from 'react';
import { Link } from 'react-router-dom';
import styles from './auth_template.module.css';

const AuthTemplate = ({children}) => {
    return (
        <div className={styles.block}>
            <div className={styles.box}>
                <div className={styles.logo}>
                    <Link to="/">DreamLog</Link>
                </div>
                {children}
            </div>
        </div>
    );
};

export default AuthTemplate;