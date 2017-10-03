import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import { loadRestaurants } from './actions/restaurantActions';
import App from './components/App'

const store = configureStore();
store.dispatch(loadRestaurants());

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();