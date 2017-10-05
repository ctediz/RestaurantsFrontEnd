import expect from 'expect';
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ManageRestaurant } from './ManageRestaurant';

require('../../helpers/enzyme_setup');

describe('Manage Course Page', function () {
    it('Properly changes state when fields are changed', function () {
        let props = {
            actions: { saveRestaurant: (restaurant) => { 
                //console.log(restaurant);    // temp
                props.restaurant = restaurant;
                return Promise.resolve(); 
            } },
            restaurant: {
                URL: "http://www.just-eat.co.uk/restaurants-cn-chinese-cardiff/menu",
                _id: {
                    $oid: "55f14312c7447c3da7051b26"
                },
                address: "228 City Road",
                city: "Cardiff",
                name: ".CN Chinese",
                outcode: "CF24",
                postcode: "3JH",
                rating: 5,
                type_of_food: "Chinese"
            }
        }
        const wrapper = mount(<ManageRestaurant {...props} />);

        const nameInput = wrapper.find('input').first();
        expect(nameInput.prop('type')).toBe('text');

        // Verify expected props passed
        let value = nameInput.props().value;
        expect(value).toBe(props.restaurant.name);

        // On change event in text input field to verify state change
        value = 'new restaurant';
        nameInput.simulate('change', {target: {name:'name', value:value}});
        expect(wrapper.state().restaurant.name).toBe(value);
    });
})