import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/list/PaginationContainer';
import PostListConatiner from '../containers/list/PostListContainer';

const PostListPage = () => {
    return (
        <div>
            <HeaderContainer />
            <PostListConatiner />
            {/* <PaginationContainer /> */}
        </div>
    );
};

export default PostListPage;