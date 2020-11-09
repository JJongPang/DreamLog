import React from 'react';
import styles from './tag_button.module.css';

const TagButton = ({onCancel, onPublish, isEdit}) => {
    return (
        <div className={styles.button_list}>
            <button className={styles.publish} onClick={onPublish}>포스트 {isEdit ? '수정' : '등록'}</button>
            <button className={styles.cancel} onClick={onCancel} >취소</button>
        </div>
    );
};

export default TagButton;