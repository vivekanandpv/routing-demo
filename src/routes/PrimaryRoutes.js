import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import AppLayout from '../layout/AppLayout';

const PrimaryRoutes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/login' render={() => <AppLayout />} />
        <Route exact path='/special' render={() => <AppLayout special />} />
        <Route render={() => <AppLayout navbar footer />} />
      </Switch>
    </Fragment>
  );
};

export default PrimaryRoutes;
