import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const restaurants = [
    {
        "URL": "http://www.just-eat.co.uk/restaurants-cn-chinese-cardiff/menu",
        "_id": {
            "$oid": "55f14312c7447c3da7051b26"
        },
        "address": "228 City Road",
        "city": "Cardiff",
        "name": ".CN Chinese",
        "outcode": "CF24",
        "postcode": "3JH",
        "rating": 5,
        "type_of_food": "Chinese"
    },
    {
        "URL": "http://www.just-eat.co.uk/restaurants-atthai-ss9/menu",
        "_id": {
            "$oid": "55f14312c7447c3da7051b27"
        },
        "address": "376 Rayleigh Road",
        "city": "Essex",
        "name": "@ Thai",
        "outcode": "SS9",
        "postcode": "5PT",
        "rating": 5.5,
        "type_of_food": "Thai"
    },
    {
        "URL": "http://www.just-eat.co.uk/restaurants-atthairestaurant/menu",
        "_id": {
            "$oid": "55f14312c7447c3da7051b28"
        },
        "address": "30 Greyhound Road Hammersmith",
        "city": "London",
        "name": "@ Thai Restaurant",
        "outcode": "W6",
        "postcode": "8NX",
        "rating": 4.5,
        "type_of_food": "Thai"
    },
    {
        "URL": "http://www.just-eat.co.uk/restaurants-indiancom-ch4/menu",
        "_id": {
            "$oid": "55f14312c7447c3da7051b2a"
        },
        "address": "9 Broughton Hall Road",
        "city": "Broughton",
        "name": "@Indian.com",
        "outcode": "CH4",
        "postcode": "0QR",
        "rating": 6,
        "type_of_food": "Curry"
    },
    {
        "URL": "http://www.just-eat.co.uk/restaurants-007takeaway-s65/menu",
        "_id": {
            "$oid": "55f14312c7447c3da7051b2b"
        },
        "address": "6 Drummond Street",
        "city": "Rotherham",
        "name": "007 Takeaway",
        "outcode": "S65",
        "postcode": "1HY",
        "rating": 6,
        "type_of_food": "Pizza"
    },
    {
        "URL": "http://www.just-eat.co.uk/restaurants-042-restaurant-e11/menu",
        "_id": {
            "$oid": "55f14312c7447c3da7051b2c"
        },
        "address": "885 High Road Leytonstone",
        "city": "London",
        "name": "042 Restaurant & Bar",
        "outcode": "E11",
        "postcode": "1HR",
        "rating": 3,
        "type_of_food": "African"
    }
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (restaurant) => {
    return replaceAll(restaurant.name, ' ', '-');
};

class RestaurantApi {
    static getAllRestaurants() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], restaurants));
            }, delay);
        });
    }

    static saveRestaurant(restaurant) {
        restaurant = Object.assign({}, restaurant); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate server-side validation
                const minRestaurantNameLength = 2;
                if (restaurant.name.length < minRestaurantNameLength) {
                    reject(`Name must be at least ${minRestaurantNameLength} characters.`);
                }

                if (restaurant._id) {
                    const existingRestaurantIndex = restaurants.findIndex(a => a._id === restaurant._id);
                    restaurants.splice(existingRestaurantIndex, 1, restaurant);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new restaurants in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    restaurant._id = generateId(restaurant);
                    restaurants.push(restaurant);
                }

                resolve(restaurant);
            }, delay);
        });
    }

    static deleteRestaurant(restaurantId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfRestaurantToDelete = restaurants.findIndex(restaurant => {
                    restaurant._id === restaurantId;
                });
                restaurants.splice(indexOfRestaurantToDelete, 1);
                resolve();
            }, delay);
        });
    }
}

export default RestaurantApi;