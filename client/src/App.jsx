import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Write from './component/wrtie/write';
import PostViewerContainer from './containers/posts/PostViewerContainer';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Write />
        </Route>
        <Route exact path="/postview">
          <PostViewerContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;