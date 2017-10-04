import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as restaurantActions from '../../actions/restaurantActions';

class ManageRestaurant extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            restaurant: Object.assign({}, props.restaurant),
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.restaurant._id.$oid !== nextProps.restaurant._id.$oid) {
            this.setState({ restaurant: Object.assign({}, nextProps.restaurant) });
        }
    }

    // Saves course
    handleSubmit(event) {
        event.preventDefault();
        this.props.actions.saveRestaurant(this.state.restaurant)
            .then(() => {
                this.props.history.push('/restaurants');
            })
            .catch(error => {
                alert(error);
            });
    }

    onChange(event) {
        const field = event.target.name;
        let restaurant = Object.assign({}, this.state.restaurant);
        restaurant[field] = event.target.value;
        return this.setState({ restaurant: restaurant });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <div className="field">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={this.state.restaurant.name}
                            onChange={this.onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <div className="field">
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            value={this.state.restaurant.address}
                            onChange={this.onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="City">City</label>
                    <div className="field">
                        <input
                            type="text"
                            name="city"
                            className="form-control"
                            value={this.state.restaurant.city}
                            onChange={this.onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="outcode">Outcode</label>
                    <div className="field">
                        <input
                            type="text"
                            name="outcode"
                            className="form-control"
                            value={this.state.restaurant.outcode}
                            onChange={this.onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="postcode ">Postcode</label>
                    <div className="field">
                        <input
                            type="text"
                            name="postcode"
                            className="form-control"
                            value={this.state.restaurant.postcode}
                            onChange={this.onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="rating ">Rating</label>
                    <div className="field">
                        <input
                            type="text"
                            name="rating"
                            className="form-control"
                            value={this.state.restaurant.rating}
                            onChange={this.onChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="type_of_food ">Type of Food</label>
                    <div className="field">
                        <input
                            type="text"
                            name="type_of_food"
                            className="form-control"
                            value={this.state.restaurant.type_of_food}
                            onChange={this.onChange} />
                    </div>
                </div>

                <input type="submit" value="Save" onClick={this.handleSubmit} />
            </form>
        );
    }
}

function getRestaurantById(restaurants, id) {
    const restaurant = restaurants.filter(restaurant => restaurant._id.$oid === id);
    // filter returns array, only expecting one restaurant
    if (restaurant.length) {
        return restaurant[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    const restaurantId = ownProps.match.params.id;    // from url /:id
    let restaurant = {
        _id: '',
        address: '',
        city: '',
        name: '',
        outcode: '',
        postcode: '',
        rating: '',
        type_of_food: ''
    };

    if (restaurantId && state.restaurants.length > 0) {
        restaurant = getRestaurantById(state.restaurants, restaurantId);
    }

    return {
        restaurant: restaurant
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(restaurantActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageRestaurant);