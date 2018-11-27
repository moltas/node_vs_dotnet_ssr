import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';


export default () => <Switch>
	<Route path="/" component={HomePage} />
	<Route component={NotFoundPage} />
</Switch>