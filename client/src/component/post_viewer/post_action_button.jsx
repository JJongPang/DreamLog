import React from 'react';
import styles from './post_action_button.module.css';
import Button from '../common/button/button';

const PostActionButton = ({onEdit}) => {
    return (
        <div className={styles.block}>
            <Button onClick={onEdit} className={styles.button_update}>수정</Button>
            <Button className={styles.button_delete}>삭제</Button>
        </div>
    );
};

export default PostActionButton;