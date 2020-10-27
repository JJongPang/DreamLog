import React from 'react';
import Responsive from '../component/common/Responsive';
import Editor from '../component/wrtie/editor';
import TagBox from '../component/wrtie/tagbox';
import WriteActionButtons from '../component/wrtie/write_action_button';

const WritePage = () => {
    return (
       <Responsive>
           <Editor />
           <TagBox />
           <WriteActionButtons />
       </Responsive>
    );
};

export default WritePage;