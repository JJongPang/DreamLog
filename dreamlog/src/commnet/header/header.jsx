import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>DreamLog</h1>
            <div className={styles.search}>
                <i className="fas fa-search"></i>
            </div>
        </header>            
    );
};

export default Header;