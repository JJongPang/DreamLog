import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagButton from '../component/wrtie/tag_box/tag_button/tag_button';
import { writePost } from '../modules/write';

const WriteActionButtonContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, tags, post, postError } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        tags: write.tags,
        post: write.post,
        postError: write.postError,
    }));

    //포스트 등록
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
        console.log('취소');
    };

    return <TagButton onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteActionButtonContainer;
