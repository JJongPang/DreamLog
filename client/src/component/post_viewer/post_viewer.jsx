import React from 'react';
import SubInfo from '../common/subinfo/subinfo';
import Tags from '../common/tag/tags';
import styles from './post_viewer.module.css';

const PostViewer = ({post, error, loading, actionButtons}) => {
    if(error) {
        if(error.response && error.response.status === 404) {
            return <div className={styles.block}>존재하지 않는 포스트입니다.</div>
        }
        return <div className={styles.block}>오류 발생!</div>
    }

    if(loading || !post) {
        return null;
    }
    
    const {title, body, publish_date, tags, user} = post;
    return (
        <div className={styles.block}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <SubInfo username={user.username} publishDate={publish_date} />
                <Tags tags={tags} />
            </div>
            {actionButtons}
            <div className={styles.content} dangerouslySetInnerHTML={{__html: body}} />
        </div>
    );
};

export default PostViewer;