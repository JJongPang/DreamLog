import React from 'react';
import Header from '../component/common/header/header';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListConatiner from '../containers/list/PostListContainer';

const PostListPage = () => {
    return (
        <div>
            <HeaderContainer />
            <PostListConatiner />
        </div>
    );
};

export default PostListPage;