import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RestaurantsPage from '../restaurant/RestaurantsPage';
import HomePage from '../home/HomePage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/restaurants" component={RestaurantsPage}/>
    </Switch>
);

export default Main;