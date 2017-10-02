import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RestaurantList from './RestaurantList'
import * as restaurantActions from '../actions/restaurantActions';


class RestuarantsPage extends React.Component {
    render() {
        const { restaurants } = this.props;
        return (
            <div>
                <h1>Restaurants</h1>
                <RestaurantList restaurants={restaurants} />
            </div>
        );
    }
}

RestuarantsPage.propTypes = {
    restaurants: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        restaurants: state.restaurants
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(restaurantActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestuarantsPage);