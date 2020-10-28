import React, { useEffect, useState } from 'react';
import LogItem from '../log_item/log_item';
import styles from './log_list.module.css';

const LogList = () => {
    const [logDatas, setLogDatas] = useState({});

    const getEditorData = async () => {
        const response = await fetch(`http://localhost:5000/editor`, {});
        const data = await response.json();
        console.log(data);
        setLogDatas(data);
    }

    

    useEffect(() => {
        getEditorData();
    }, []);

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