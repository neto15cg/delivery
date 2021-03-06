import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const HomePage = lazy(() => import('@pages/homePage/HomePage'));
const Products = lazy(() => import('@pages/productsPage/ProductsPage'));

const Routing = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/products" exact component={Products} />
          <Route path="/" exact component={HomePage} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routing;
