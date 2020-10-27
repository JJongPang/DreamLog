import React from 'react';
import styles from './tag_item.module.css';
const TagItem = ({ tag, onRemove }) => {
    return (
        <div onClick={() => onRemove(tag)} className={styles.item}>
            {tag}
        </div>
    );
};

export default TagItem;