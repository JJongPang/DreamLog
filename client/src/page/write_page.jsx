import React from 'react';
import EditorContainer from '../containers/write/EditorContainer';
import TextBoxContainer from '../containers/write/TegBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import styles from './write_page.module.css';

const WritePage = () => {
    return (
        <div className={styles.block}>
            <EditorContainer />
            <TextBoxContainer />
            <WriteActionButtonContainer />
        </div>
    );
};

export default WritePage;