import React from 'react';
import QuillEditor from './quill_editor/quill_editor';
import TagBox from './tag_box/tag_box';
import TagButton from './tag_box/tag_button/tag_button';
import styles from './write.module.css';

const Write = () => {
    return (
        <div className={styles.write_block}>
            <QuillEditor />
            <TagBox />
            <TagButton />
        </div>
    );
};

export default Write;