import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PostViewer from './component/post_viewer/post_viewer';
import QuillEditor from './component/wrtie/quill_editor/quill_editor';
import Write from './component/wrtie/write';
import PostViewerContainer from './containers/PostViewerContainer';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Write />
        </Route>
        <Route exact path="/postviewer">
          <PostViewerContainer />
        </Route>
      </Switch>
    </div>
  );
};

export default App;