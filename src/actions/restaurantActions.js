import * as types from './actionTypes';
import restaurantApi from '../api/mockRestaurantApi';

export function loadRestaurantsSuccess(restaurants) {
    return {
        type: types.LOAD_RESTAURANTS_SUCCESS,
        restaurants
    }
}

export function loadRestaurants() {
    return function(dispatch) {
        return restaurantApi.getAllRestaurants().then((restaurants) => {
            dispatch(loadRestaurantsSuccess(restaurants));
        }).catch((error) => {
            throw(error);
        });
    };
}