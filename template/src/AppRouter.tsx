import React from 'react';
import { RecoilRoot } from 'recoil';
import { GlobalStyles } from 'twin.macro';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const AppRouter = () => (
  <>
    <GlobalStyles />
    <Router>
      <RecoilRoot>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </RecoilRoot>
    </Router>
  </>
);

export default AppRouter;
