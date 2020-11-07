import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './post_item';
import styles from './post_list.module.css';
const PostList = ({posts, loading, error}) => {
    console.log(posts)
    return (
        <div className={styles.block}>
            <div className={styles.write_button}> 
                <Link to='/write'>
                    <button className={styles.publish}>새 글 작성</button>
                </Link>
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