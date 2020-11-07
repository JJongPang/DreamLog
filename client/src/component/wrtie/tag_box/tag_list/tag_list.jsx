import React from 'react';
import TagItem from './tag_item';
import styles from './tag_list.module.css';

const TagList = React.memo(({ tags, onRemove }) => {
    return (
        <div className={styles.list_block}>
            {tags.map(tag => (
                <TagItem key={tag} tag={tag} onRemove={onRemove} />
            ))}
        </div>
    );
});

export default TagList;