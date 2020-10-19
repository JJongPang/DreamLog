import React from 'react';
import MainLog from '../main_log/main_log';
import styles from './main_header.module.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import MainNews from '../main_news/main_news';

const MainHeader = () => {
    return (
        <BrowserRouter>
        <header className={styles.mainHeader}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link style={{textDecoration: 'none'}} to='/'>꿈 의 기록</Link>
                </li>
                <li className={styles.item}>
                    <Link style={{textDecoration: 'none'}} to='/news'>IT트렌드</Link>
                </li>
            </ul>
        </header>
            <Switch>
                <Route exact path='/' component={MainLog} />
                <Route exact path='/news' component={MainNews} />
            </Switch>
        </BrowserRouter>
    );
};

export default MainHeader;