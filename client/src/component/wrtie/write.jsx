import React from 'react';
import EditorContainer from '../../containers/write/EditorContainer';
import TextBoxContainer from '../../containers/write/TegBoxContainer';
import WriteActionButtonContainer from '../../containers/write/WriteActionButtonContainer';
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