import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function restaurantReducer(state = initialState.restaurants, action) {
    switch(action.type) {
        case types.LOAD_RESTAURANTS_SUCCESS:
            return action.restaurants;
        case types.UPDATE_RESTAURANT_SUCCESS:
            return [
                ...state.filter(restaurant => restaurant._id.$oid !== action.restaurant._id.$oid),
                Object.assign({}, action.restaurant)
            ];
        default:
            return state
    }
}