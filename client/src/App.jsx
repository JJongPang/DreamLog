import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostPage from './component/wrtie/post_page';
import Write from './component/wrtie/write';
import PostViewerContainer from './containers/posts/PostViewerContainer';

const App = () => {
  return (
    <div>
      <Switch>
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