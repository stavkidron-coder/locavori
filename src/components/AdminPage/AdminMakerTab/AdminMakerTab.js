import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { FormGroup, Input } from 'reactstrap';


class MakerRegisterStoryTab extends Component {

    render() {
        return (
            <>

                <h1>Pending Approval Request</h1>
            </>
        );
    }
}


export default withRouter(connect(mapStoreToProps)(MakerRegisterStoryTab));