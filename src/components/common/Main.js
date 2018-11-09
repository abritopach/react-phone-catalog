import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PhoneListContainer from '../../components/PhoneListContainer';
import PhoneDetailComponent from '../../components/PhoneDetailComponent';

const Main = () => (
    <Switch>
        <Route exact path='/' component={PhoneListContainer}/>
        <Route path='/detail' component={PhoneDetailComponent}/>
    </Switch>
);

export default Main;