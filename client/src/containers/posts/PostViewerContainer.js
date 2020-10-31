import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSaga, readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../component/post_viewer/post_viewer';
import { useHistory, withRouter } from 'react-router-dom';

const PostViewerContainer = (props) => {
    const { id } = props.match.params;
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector(({ post, loading }) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
    }));

    useEffect(
        () => {
            dispatch(readPost(id));
            return () => {
                dispatch(unloadPost());
            };
        },
        [dispatch],
        id
    );

    return <>{post !== null ? <PostViewer post={post} loading={loading} error={error} /> : <h1>로딩중...</h1>}</>;
};

export default withRouter(PostViewerContainer);
