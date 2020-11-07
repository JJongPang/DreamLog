import React from 'react';
import styles from './post_viewer.module.css';

const PostViewer = ({post, error, loading}) => {
    if(error) {
        if(error.response && error.response.status === 404) {
            return <div className={styles.block}>존재하지 않는 포스트입니다.</div>
        }
        return <div className={styles.block}>오류 발생!</div>
    }

    if(loading || !post) {
        return null;
    }
    
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