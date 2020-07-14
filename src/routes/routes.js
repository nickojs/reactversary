import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Auth from '../Containers/Auth/Auth';
import Logout from '../Containers/Auth/Logout';
import Birthdate from '../Containers/Birthdate/Birthdate';

import withNavigation from '../hoc/withNavigation';

const routesArray = [
  { path: '/dashboard', name: 'Birthdate Dashboard', Component: Birthdate },
  { path: '/logout', name: 'Logout', Component: Logout }
];

const routes = (
  <Switch>
    <Route exact path="/" component={Auth} />
    {routesArray.map(
      ({ path, Component }) => (
        <Route key={path} path={path} component={withNavigation(Component)} />
      )
    )}
    <Redirect to="/" />
  </Switch>

);

export default routes;
