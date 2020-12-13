import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import MapView from '../MapView/MapView';
import ListView from '../ListView/ListView';

const MapListToggleBtn = (props) => {
    
  const [rSelected, setRSelected] = useState(<MapView/>);

  return (
    <div>
      <ButtonGroup>
        <Button color="primary" onClick={() => setRSelected(<MapView/>)} active={rSelected === 1}>Map</Button>
        <Button color="primary" onClick={() => setRSelected(<ListView/>)} active={rSelected === 2}>List</Button>
      </ButtonGroup>
        <div className="map-list-view">
          {rSelected}
        </div>
    </div>
  );
}

export default MapListToggleBtn;