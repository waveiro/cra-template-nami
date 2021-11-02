// src/AppRouter.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil'
import App from './App';

const AppRouter = () => (
  <Router>
      <RecoilRoot>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </RecoilRoot>
  </Router>
);


export default AppRouter;
