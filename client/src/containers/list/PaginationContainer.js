import React from 'react';
import { useSelector } from 'react-redux';
import qs from 'qs';
import Paginations from '../../component/post_list/paginations';
import { withRouter } from 'react-router-dom';

const PaginationContainer = ({ location, match }) => {
    const { lastpage, posts, loading } = useSelector(({ posts, loading }) => ({
        lastpage: posts.lastPage,
        posts: posts.posts,
        loading: loading['posts/LIST_POSTS'],
    }));

    if (!posts || loading) return null;

    const { username } = match.params;

    const { tag, page = 1 } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
    });

    return <Paginations tag={tag} username={username} page={parseInt(page, 10)} lastPage={lastpage} />;
};

export default withRouter(PaginationContainer);
