import React, { useState } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { withRouter } from "react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SaveModal = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} className="modalBtns">Save Progress</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="modalHeader">Application Saved</ModalHeader>
        <ModalBody>
            Your application has been successfully saved!
        </ModalBody>
        <ModalFooter className="modalFooter">
          <Button color="primary" onClick={toggle} className="modalBtns">Ok!</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default withRouter(connect(mapStoreToProps)(SaveModal));