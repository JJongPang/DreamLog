import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TextBoxContainer from '../containers/write/TegBoxContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';

const WritePage = () => {
    return (
        <div>
            <HeaderContainer />
            <EditorContainer />
            <TextBoxContainer />
            <WriteActionButtonContainer />
        </div>
    );
};

export default WritePage;