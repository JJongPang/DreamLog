import React from 'react';
import { Link } from 'react-router-dom';
import styles from './subinfo.module.css';

const SubInfo = ({username, publishDate}) => {
    return (
        <div className={styles.block}>
            <span>
                <b>
                    <Link to={`/@${username}`}>{username}</Link>
                </b>
            </span>
            <span>{new Date(publishDate).toLocaleDateString()}</span>
        </div>
    );
};

export default SubInfo;