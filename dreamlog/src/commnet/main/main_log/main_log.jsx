import React from 'react';
import LogMaker from './log_maker/log_maker';
import styles from './main_log.module.css';

const MainLog = () => {
    return (
        <div>
            <button className={styles.button}>
                <h2 className={styles.title}>꿈 의 기록</h2>
            </button>
            <div className={styles.logContainer}>
                <LogMaker />
            </div>
        </div>    
    );
};

export default MainLog;