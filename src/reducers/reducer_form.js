import * as types from '../constants/actionTypes';

// Handles form related actions
export default function (state = {
  firstName: '',
  lastName: '',
  agree: false
}, action) {
  switch (action.type) {
    case types.SUBMIT_FORM:
      return {...state, ...action.payload};
    case types.UPDATE_FORM:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
