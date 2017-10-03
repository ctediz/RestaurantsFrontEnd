import React from 'react';
import PropTypes from 'prop-types'
import RestaurantListRow from './RestaurantListRow';

const RestaurantList = ({ restaurants }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Outcode</th>
                    <th>Postcode</th>
                    <th>Rating</th>
                    <th>Type of Food</th>
                </tr>
            </thead>
            <tbody>
                {restaurants.map((restaurant) =>
                    <RestaurantListRow
                        key={restaurant._id.$oid}
                        restaurant={restaurant} />
                )}
            </tbody>
        </table>
    );
}

RestaurantList.propTypes = {
    restaurants: PropTypes.array.isRequired
}

export default RestaurantList;