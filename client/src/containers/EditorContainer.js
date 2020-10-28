import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuillEditor from '../component/wrtie/quill_editor/quill_editor';
import { changeField, initialize } from '../modules/write';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const { title, body } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
    }));

    const onChangeField = useCallback((payload) => dispatch(changeField(payload)), [dispatch]);

    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    return <QuillEditor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
