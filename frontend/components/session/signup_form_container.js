import React from "react";
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => ({
    errors: Object.values(state.errors),
    formType: 'signup'
});

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);