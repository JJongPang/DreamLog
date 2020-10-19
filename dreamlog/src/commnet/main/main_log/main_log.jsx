import React from 'react';
import LogMaker from './log_maker/log_maker';
import styles from './main_log.module.css';

const MainLog = () => {
    return (
        <div className={styles.logContainer}>
                <LogMaker />
        </div>
    );
};

export default MainLog;