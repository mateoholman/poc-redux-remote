import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateForm } from '../actions';
import { bindActionCreators } from 'redux';

/*
  We want to handle onChange events from input components and respond to those change events by immediately passing the updated values back down to the input, for fast UI response. If several changes happened close together, only dispatch a single Redux action after they were all done, with the final values.  We essentially want to buffer input changes in their own component state, combine those changes with incoming props, and debounce changes to minimize the number of dispatched Redux actions.
*/

class FancyForm extends Component {
  constructor(){
    super();
    this.state = {
      agree: false,
      firstName: '',
      lastName: ''
    };
  }
  render() {
    return(
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder='First Name'
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value})}
            onBlur={() => this.props.updateForm(this.state)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder='Last Name'
            value={this.state.lastName}
            onChange={e => this.setState({ lastName: e.target.value})}
            onBlur={() => this.props.updateForm(this.state)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
      </Form>
    );
  }
}

// Subscribe component to redux store and merge the state into component's props
function mapStateToProps(state) {
  return {
    form: state.form
  };
}

//Anything returned from this function will show up as props
function mapDispatchToProps(dispatch) {
  //Whenever submitForm is called, the result should be passed to all our
  //reducers.
  return bindActionCreators({ updateForm: updateForm }, dispatch);
}

export default connect(null, mapDispatchToProps)(FancyForm);
