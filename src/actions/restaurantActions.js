import * as types from './actionTypes';
import restaurantApi from '../api/mockRestaurantApi';

export function loadRestaurantsSuccess(restaurants) {
    return {
        type: types.LOAD_RESTAURANTS_SUCCESS,
        restaurants
    }
}

export function updateRestaurantSuccess(restaurant) {
    return {
        type: types.UPDATE_RESTAURANT_SUCCESS,
        restaurant
    }
}

export function createRestaurantSuccess(restaurant) {
    return {
        type: types.CREATE_RESTAURANT_SUCCESS,
        restaurant
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

export function saveRestaurant(restaurant) {
    return function (dispatch, getState) {
        return restaurantApi.saveRestaurant(restaurant).then(saved => {
            restaurant._id.$oid ? dispatch(updateRestaurantSuccess(saved)) : dispatch(createRestaurantSuccess(saved));
        }).catch(error => {
            throw(error);
        });
    };
}