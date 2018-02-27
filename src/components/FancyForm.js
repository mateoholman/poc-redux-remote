import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateForm } from '../actions';
import { bindActionCreators } from 'redux';

const FancyForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
  </Form>
)


//Anything returned from this function will show up as props
function mapDispatchToProps(dispatch) {
  //Whenever submitForm is called, the result should be passed to all our
  //reducers.
  return bindActionCreators({ updateForm }, dispatch);
}

export default connect()(FancyForm);
