import React from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Article from './pages/article.jsx';
import NotFound from './pages/notFound.jsx';

const historyOptions = {
  queryKey : false
};

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home } />
      <Route path='home' component={ Home } />
      <Route path='article/:articleId' component={ Article } />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
);

export default routes;
