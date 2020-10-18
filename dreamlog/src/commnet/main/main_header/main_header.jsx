import React from 'react';
import MainLog from '../main_log/main_log';
import styles from './main_header.module.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const MainHeader = () => {
    return (
        <header className={styles.mainHeader}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <MainLog />
                    </Route>
                </Switch>
            </BrowserRouter>
        </header>
    );
};

export default MainHeader;