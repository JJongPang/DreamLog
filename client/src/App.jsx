import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostPage from './component/wrtie/post_page';
import Write from './component/wrtie/write';
import LoginPage from './page/login_page';
import PostListPage from './page/post_list_page';
import RegisterPage from './page/register_page';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <PostListPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/write">
          <Write />
        </Route>
        <Route exact path="/@:username/:id">
          <PostPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;