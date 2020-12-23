import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../../../redux/mapStoreToProps';
import { Tooltip, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const thumbsDown = <FontAwesomeIcon icon={faThumbsDown}/>

const DeclineToolTip = (props) => {

   

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
      <div>
        <Button
          id="declineBtn"
          color="outline-danger">
           {thumbsDown}
        </Button>

        <Tooltip placement="bottom" isOpen={tooltipOpen} target="declineBtn" toggle={toggle}>
            Decline
        </Tooltip>
      </div>
  );
}

export default withRouter(connect(mapStoreToProps)(DeclineToolTip));