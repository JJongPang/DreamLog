import React from 'react';
import { Link } from 'react-router-dom';
import styles from './tags.module.css';

const Tags = ({tags}) => {
    return (
        <div className={styles.block}>
            {tags.map(tag => (
                <Link className={styles.tag} to={`/?tag=${tag}`} key={tag}>#{tag}</Link>
            ))}
        </div>
    );
};

export default Tags;