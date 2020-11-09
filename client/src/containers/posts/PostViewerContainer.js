import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSaga, readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../component/post_viewer/post_viewer';
import { useHistory, withRouter } from 'react-router-dom';
import PostActionButton from '../../component/post_viewer/post_action_button';
import { setOriginalPost } from '../../modules/write';
import { removePost } from '../../lib/api/posts';

const PostViewerContainer = ({ match, history }) => {
    const { id } = match.params;
    const dispatch = useDispatch();
    const { post, error, loading, user } = useSelector(({ post, loading, user }) => ({
        post: post.post,
        error: post.error,
        loading: loading['post/READ_POST'],
        user: user.user,
    }));

    useEffect(() => {
        dispatch(readPost(id));
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, id]);

    const onEdit = () => {
        dispatch(setOriginalPost(post));
        history.push('/write');
    };

    const onRemove = async () => {
        try {
            await removePost(id);
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    const ownPost = (user && user._id) === (post && post.user._id);

    return (
        <PostViewer
            post={post}
            loading={loading}
            error={error}
            actionButtons={ownPost && <PostActionButton onEdit={onEdit} onRemove={onRemove} />}
        />
    );
};

export default withRouter(PostViewerContainer);
