/*
  Actions are payloads of info that send data from your app to your store.
  They are the only source of information for the store.
  They are plain JavaScript objects.
  They must have a type property that indicates the type of action being performed.
  Types will be defined as string constants and imported from actionTypes
  Actions may additionally have a payload property.
  The payload property may be any type and value.
  An action MUST NOT include properties other than type and payload
*/


import * from './constants/actionTypes.';

/*
  Action creators are functions that create actions. It's easy to conflate the terms “action” and “action creator,” so do your best to use the proper term.
  Action creator functions should be named with simple imperative verb phrases, e.g. updateCreditCard, verifyEmail, uploadDataset, dismissWelcomeModal
  Action creators are always passed into components as props, via the mapDispatchToProps argument of react-redux’s connect(). A typical mapDispatchToProps object simply maps action creators to props of the same name.
*/

// Returns an action type, UPDATE_FORM and the form being updated
export const updateForm = (form) => ({
  type: UPDATE_FORM,
  payload: form
});

// Returns an action type, SUBMIT_FORM and the form being submitted
export const submitForm = (form) => ({
  type: SUBMIT_FORM,
  payload: form
});
