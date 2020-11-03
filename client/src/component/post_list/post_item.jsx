import React from 'react';
import styles from './post_item.module.css';

const PostItem = ({post}) => {

    const {publish_date, tags, title, body, _id} = post

    return (
        <div className={styles.block}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.sub_info}>
                <span className={styles.user}>
                    <b>{_id}</b>
                </span>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className={styles.tags}>
                <div className={styles.tag}>#{tags}</div>
            </div>
            <p className={styles.content}>{body}</p>
        </div>
    );
};

export default PostItem;