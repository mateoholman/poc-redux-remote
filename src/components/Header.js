import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { submitForm } from '../actions';
import { bindActionCreators } from 'redux';

class Header extends Component {
  handleSubmit(e){
    e.preventDefault();
    console.log('Would submit: ');
    console.dir(this.props);
  }
  render() {
    return (
      <div>
        <Segment inverted>
          <Button inverted onClick={this.handleSubmit.bind(this)}>Submit</Button>
        </Segment>
      </div>
    );
  }
}

// Subscribe component to redux store and merge the state into component's props
function mapStateToProps(state) {
  return {
    form: state.form
  };
}

// //Anything returned from this function will show up as props
// function mapDispatchToProps(dispatch) {
//   //Whenever submitForm is called, the result should be passed to all our
//   //reducers.
//   return bindActionCreators({ submitForm }, dispatch);
// }

export default connect(mapStateToProps)(Header);
