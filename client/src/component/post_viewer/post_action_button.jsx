import React from 'react';
import styles from './post_action_button.module.css';
import Button from '../common/button/button';
import { useState } from 'react';
import AskModals from '../common/askModal/ask_modal';

const PostActionButton = ({onEdit, onRemove}) => {
    const [modal, setModal] = useState(false);
    
    const onRemoveClick = () => {
        setModal(true);
    }

    const onCancel = () => {
        setModal(false);
    }

    const onConfirm = () => {
        setModal(false);
        onRemove();
    }

    return (
        <>
            <div className={styles.block}>
                <Button onClick={onEdit} className={styles.button_update}>수정</Button>
                <Button onClick={onRemoveClick} className={styles.button_delete}>삭제</Button>
            </div>
            <AskModals 
                visible={modal}
                onConfirm={onConfirm}
                onCancel={onCancel}
            />
        </>
    );
};

export default PostActionButton;