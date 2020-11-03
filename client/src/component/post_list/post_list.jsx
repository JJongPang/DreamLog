import React from 'react';
import PostItem from './post_item';
import styles from './post_list.module.css';
const PostList = ({posts, loading, error}) => {
    console.log(posts)
    return (
        <div className={styles.block}>
            <div className={styles.write_button}> 
                <button className={styles.publish}>새 글 작성</button>
            </div>
            <div>
                {posts.map(post => (
                    <PostItem post={post} key={post._id} />
                ))}
            </div>
        </div>
    );
};

export default PostList;