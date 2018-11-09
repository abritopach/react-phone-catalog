import * as types from '../constants/actionTypes';

import { mockablePhones } from '../api/api';

// Returns an action type, SELECTED_PHONE and the phone selected.
export const selectPhoneAction = (phone) => ({
    type: types.SELECTED_PHONE,
    phone
});

// Returns an action type, UNSELECTED_PHONE.
export const unSelectPhoneAction = () => ({
    type: types.UNSELECTED_PHONE
});

// Returns an action type, LOAD_PHONES_SUCCESS and retrieved phones.
export const loadPhonesSuccessAction = (phones) => ({  
    type: types.LOAD_PHONES_SUCCESS, 
    phones
});

export function loadPhones() {  
    return function(dispatch) {
      return  mockablePhones().then(phones => {
        dispatch(loadPhonesSuccessAction(phones));
      }).catch(error => {
        throw(error);
      });
    };
  }