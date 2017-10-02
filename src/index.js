import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import './styles/styles.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './HomePage';
import RestuarantsPage from './components/RestaurantsPage';
import configureStore from './store/configureStore';
import { loadRestaurants } from './actions/restaurantActions';

const store = configureStore();
store.dispatch(loadRestaurants());

render(
    <Provider store={store}>
        <BrowserRouter>
            <div className="container-fluid">
                <Route path="/" exact component={HomePage} />
                <Route path="/restaurants" component={RestuarantsPage} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();