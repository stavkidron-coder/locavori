import React, { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import MapView from '../MapView/MapView';
import ListView from '../ListView/ListView';

const MapListToggleBtn = (props) => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(<MapView/>);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
  return (
    <div>
      <ButtonGroup>
        <Button color="primary" onClick={() => setRSelected(<MapView/>)} active={rSelected === 1}>Map</Button>
        <Button color="primary" onClick={() => setRSelected(<ListView/>)} active={rSelected === 2}>List</Button>
      </ButtonGroup>
        <div>
          {rSelected}
        </div>
    </div>
  );
}

export default MapListToggleBtn;