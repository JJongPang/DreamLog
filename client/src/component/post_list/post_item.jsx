import React from 'react';
import styles from './post_item.module.css';

const PostItem = () => {
    return (
        <div className={styles.block}>
            <h2 className={styles.title}>제목</h2>
            <div className={styles.sub_info}>
                <span className={styles.user}>
                    <b>username</b>
                </span>
                <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className={styles.tags}>
                <div className={styles.tag}>#태그1</div>
                <div className={styles.tag}>#태그2</div>
            </div>
            <p className={styles.content}>포스트 내용의 일부분..</p>
        </div>
    );
};

export default PostItem;