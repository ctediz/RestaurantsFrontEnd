import React from 'react';
import PropTypes from 'prop-types'

const RestaurantListRow = ({ restaurant }) => {
    return (
        <tr>
            <td>{restaurant.name}</td>
            <td>{restaurant.address}</td>
            <td>{restaurant.city}</td>
            <td>{restaurant.outcode}</td>
            <td>{restaurant.postcode}</td>
            <td>{restaurant.rating}</td>
            <td>{restaurant.type_of_food}</td>
        </tr>
    );
}

RestaurantListRow.propTypes = {
    restaurant: PropTypes.object.isRequired
}

export default RestaurantListRow;