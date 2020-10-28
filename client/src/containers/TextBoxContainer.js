import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../component/wrtie/tag_box/tag_box';
import { changeField } from '../modules/write';

const TextBoxContainer = () => {
    const dispatch = useDispatch();
    const tags = useSelector((state) => state.write.tags);

    const onChangeTags = (nextTags) => {
        dispatch(
            changeField({
                key: 'tags',
                value: nextTags,
            })
        );
    };

    return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TextBoxContainer;
