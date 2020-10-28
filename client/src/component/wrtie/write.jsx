import React from 'react';
import EditorContainer from '../../containers/EditorContainer';
import TextBoxContainer from '../../containers/TextBoxContainer';
import WriteActionButtonContainer from '../../containers/WriteActionButtonContainer';
import TagButton from './tag_box/tag_button/tag_button';
import styles from './write.module.css';

const Write = () => {
    return (
        <div className={styles.write_block}>
            <EditorContainer />
            <TextBoxContainer />
            <WriteActionButtonContainer />
        </div>
    );
};

export default Write;