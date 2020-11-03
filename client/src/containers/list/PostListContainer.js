import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostList from '../../component/post_list/post_list';
import { listPosts } from '../../modules/posts';

const PostListConatiner = ({ location, match }) => {
    console.log('location', location);
    console.log('match', match);
    const dispatch = useDispatch();
    const { posts, error, loading } = useSelector(({ posts, loading }) => ({
        posts: posts.posts,
        error: posts.error,
        loading: loading['posts/LIST_POSTS'],
    }));

    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch]);

    return <>{posts !== null ? <PostList loading={loading} error={error} posts={posts} /> : <h1>로딩중...</h1>}</>;
};

export default withRouter(PostListConatiner);
