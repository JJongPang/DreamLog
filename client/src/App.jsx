import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostList from './component/post_list/post_list';
import ListPage from './component/wrtie/list_page';
import PostPage from './component/wrtie/post_page';
import Write from './component/wrtie/write';
import PostViewerContainer from './containers/posts/PostViewerContainer';
import LoginPage from './page/login_page';
import RegisterPage from './page/register_page';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/list">
          <ListPage />
        </Route>
        <Route exact path="/write">
          <Write />
        </Route>
        <Route exact path="/write/:id">
          <PostPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;