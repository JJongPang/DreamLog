import React from 'react';
import { Link } from 'react-router-dom';
import styles from './subinfo.module.css';

const SubInfo = ({username, publishDate}) => {
    return (
        <div className={styles.block}>
            <Link to={`/@${username}`}>
                <span className={styles.username}> 
                    {username}
                </span>
             </Link>
            <span className={styles.date}>{new Date(publishDate).toLocaleDateString()}</span>
        </div>
    );
};

export default SubInfo;