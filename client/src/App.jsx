import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './page/login_page';
import PostListPage from './page/post_list_page';
import PostPage from './page/post_page';
import RegisterPage from './page/register_page';
import WritePage from './page/write_page';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path={["/@:username", "/"]}>
          <PostListPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/write">
          <WritePage />
        </Route>
        <Route exact path="/@:username/:id">
          <PostPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;