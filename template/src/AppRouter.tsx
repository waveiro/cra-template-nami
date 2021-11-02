// src/AppRouter.tsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const AppRouter = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
  </Router>
);


export default AppRouter;
