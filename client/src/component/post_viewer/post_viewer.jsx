import React from 'react';
import styles from './post_viewer.module.css';

const PostViewer = ({post, error, loading}) => {
    const {title, body, publish_date, tags} = post;
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.sub_info}>
                     <span className={styles.sub_title}>
                        <b>tester</b>
                    </span>
                    <span>{new Date(publish_date).toLocaleDateString()}</span>
                </div>
                <div className={styles.tag_list}>
                    {tags.map(tag => (
                        <div className={styles.tag}>#{tag}</div>
                    ))}
                </div>
            </div>
            <div className={styles.content} dangerouslySetInnerHTML={{__html: body}} />
        </div>
    );
};

export default PostViewer;