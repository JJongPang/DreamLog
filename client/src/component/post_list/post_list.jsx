import React from 'react';
import { Link } from 'react-router-dom';
import PostItem from './post_item';
import styles from './post_list.module.css';
import Button from '../common/button/button';

const PostList = ({posts, loading, error, showWriteButton}) => {
    if(error) {
        return <div className={styles.block}>에러가 발생했습니다.</div>
    }

    return (
        <div className={styles.block}>
            <div className={styles.write_button}> 
                {showWriteButton && (
                    <Link to='/write'>
                        <Button>새 글 작성하기</Button>
                    </Link>
                )}
            </div>
                {!loading && posts && (
                <div>
                    {posts.map(post => (
                    <PostItem post={post} key={post._id} />
                ))}
            </div>
                )}
        </div>
    );
};

export default PostList;