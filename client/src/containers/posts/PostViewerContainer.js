import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../component/post_viewer/post_viewer';

const PostViewerContainer = ({ post }) => {
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector(({ post, loading }) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
    }));

    useEffect(() => {
        dispatch(readPost());
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch]);

    return <PostViewer post={post} loading={loading} error={error} />;
};

export default PostViewerContainer;
