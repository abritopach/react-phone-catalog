import initialState from './initialState';
import * as types from '../constants/actionTypes';

// Handles phones related actions.
// The idea is to return an updated copy of the state depending on the action type.

/*
    create-react-app comes preinstalled with babel-plugin-transform-object-rest-spread that lets you use the spread (…)
    operator to copy enumerable properties from one object to another in a succinct way.
*/
export default function (state = initialState.catalog, action) {
    switch (action.type) {
        case types.SELECTED_PHONE:
            return { ...state, selectedPhone: action.phone };
        case types.UNSELECTED_PHONE:
            return { ...state, selectedPhone: null };
        case types.LOAD_PHONES_SUCCESS:
            return {...state, phones: action.phones };
        default:
            return state;
    }
}