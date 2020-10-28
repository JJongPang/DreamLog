import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagButton from '../component/wrtie/tag_box/tag_button/tag_button';
import { writePost } from '../modules/write';
import { useHistory, withRouter } from 'react-router-dom';

const WriteActionButtonContainer = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { title, body, tags, post, postError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
    }));

    // 포스트 등록
    const onPublish = () => {
        dispatch(
            writePost({
                title,
                body,
                tags,
            })
        );
    };

    //취소
    const onCancel = () => {
        history.push('/postviewer');
    };

    useEffect(() => {
        if (post) {
            console.log('등록 성공');
            //const { _id } = post;
            history.push(`/postviewer`);
        }

        if (postError) {
            console.log(postError);
        }
    }, [history, post, postError]);

    return <TagButton onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonContainer;
