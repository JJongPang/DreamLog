import React from 'react';
import PostItem from './post_item';
import styles from './post_list.module.css';
const PostList = () => {
    return (
        <div className={styles.block}>
            <div className={styles.write_button}> 
                <button className={styles.publish}>새 글 작성</button>
            </div>
            <div>
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
};

export default PostList;