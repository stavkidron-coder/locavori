import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import {  FormGroup, Input } from 'reactstrap';


class MakerRegisterStoryTab extends Component {

  render() {
    return (
        <>
            {/* my story tab */}
                <h4>My Story</h4>
                    <FormGroup>
                        <p>Story/Bio for your Maker Profile</p>
                            <Input type="text" placeholder=""></Input>

                                {/* UX presentation has spaces for other photos and captions here...where will they go if we keep them? */}
                    </FormGroup>
        </>
    );
  }
}


export default withRouter(connect(mapStoreToProps)(MakerRegisterStoryTab));