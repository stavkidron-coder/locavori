import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { FormGroup, Input } from 'reactstrap';


class Maker extends Component {

    render() {
        return (
            <>

                <h1>Maker</h1>
            </>
        );
    }
}


export default withRouter(connect(mapStoreToProps)(Maker));