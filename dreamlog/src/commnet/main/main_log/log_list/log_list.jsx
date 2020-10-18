import React from 'react';
import LogItem from '../log_item/log_item';
import styles from './log_list.module.css';

const LogList = ({ logDatas }) => {
    return (
        <ul className={styles.list}>
            {
                Object.keys(logDatas).map((key) => (
                    <LogItem key={key} logData={logDatas[key]} />
                ))
            }
        </ul>            
    );
};

export default LogList;