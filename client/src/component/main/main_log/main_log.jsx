import React from 'react';
import LogList from './log_list/log_list';
import styles from './main_log.module.css';

const MainLog = () => {
    return (
        <div className={styles.logContainer}>
                <LogList />
        </div>
    );
};

export default MainLog;