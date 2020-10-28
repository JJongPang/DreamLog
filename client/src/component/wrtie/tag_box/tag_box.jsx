import React, { useCallback } from 'react';
import { useState } from 'react';
import styles from './tag_box.module.css';
import TagList from './tag_list/tag_list';

const TagBox = () => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if(!tag) return; // 공백이라면 추가하지 않음
            if(localTags.includes(tag)) return; //이미 존재한다면 추가하지 않음
            setLocalTags([...localTags, tag]);
        },
        [localTags],
    );
    
    const onChange = useCallback(event => {
        setInput(event.target.value);
    }, []);

    const onSubmit = useCallback(event => {
            event.preventDefault();
            insertTag(input.trim()); //앞뒤 공백을 없앤  후 등록
            setInput('');
        },
        [input, insertTag],
    );

    const onRemove = useCallback(
        tag => {
            setLocalTags(localTags.filter(t => t !== tag));
        },
        [localTags],
    )

    return (
        <div className={styles.tagbox_block}>
            <h4 className={styles.tag}>태그</h4>
            <form className={styles.tag_form} onSubmit={onSubmit}>
                <input className={styles.input} type="text" value={input} onChange={onChange} placeholder="#태그를 입력하세요" />
                <button className={styles.button} type="submit">추가</button>
            </form>
            <TagList tags={localTags} onRemove={onRemove} />
        </div>
    );
};

export default TagBox;