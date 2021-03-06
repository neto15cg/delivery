import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import HomePage from '@pages/homePage/HomePage';

export const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default Routing;
