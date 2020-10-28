import React from 'react';
import styles from './post_viewer.module.css';

const PostViewer = ({post, error, loading}) => {
    const {title, body, user, publishdDate, tags} = post;
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <h1 className={styles.title}>제목</h1>
                <div className={styles.sub_info}>
                     <span className={styles.sub_title}>
                        <b>tester</b>
                    </span>
                    <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className={styles.tag_list}>
                    <div className={styles.tag}>태그1</div>
                    <div className={styles.tag}>태그2</div>
                    <div className={styles.tag}>태그3</div>
                </div>
            </div>
            <div className={styles.content} dangerouslySetInnerHTML={{__html: '<p>HTML <b>내용</b>입니다.</p>'}} />
        </div>
    );
};

export default PostViewer;