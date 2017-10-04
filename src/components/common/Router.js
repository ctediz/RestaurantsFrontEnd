import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RestaurantsPage from '../restaurant/RestaurantsPage';
import ManageRestaurant from '../restaurant/ManageRestaurant';
import HomePage from '../home/HomePage';

const Router = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/restaurants" component={RestaurantsPage}/>
        <Route path="/restaurant/:id" component={ManageRestaurant}/>
    </Switch>
);

export default Router;