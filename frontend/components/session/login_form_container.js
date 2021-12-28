import React from "react";
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => ({
    errors: Object.values(state.errors),
    formType: 'login'
});

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(login(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);