import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col, Container, Row} from 'reactstrap';
import {useSelector} from 'react-redux';

// Styles Imports
import './Map.css';
import mapStyles from "./mapStyles";
import "@reach/combobox/styles.css";
import packagedPin from '../../TestImages/packaged-prepared.png';
import freshPin from '../../TestImages/fresh.png';
import drinkPin from '../../TestImages/drink.png';


const libraries = ["places"];

// Map Container
const mapContainerStyle = {
  width: "100%",
  height: "58vh"
}

// Location of Minneapolis MN,
const center = {
  lat: 44.977753,
  lng: -93.265015,
}

// Linked to mapStyles.js, resets default map style
const options = {
  styles: mapStyles,
  zoomControl: true,
  disableDefaultUI: true,
}

function LocalMap(props) {

  // Uses store to set markers which are in turn rendered to the map
  React.useEffect (() => {
    setMarkers(store.maker);
  });

  // Upon DOM load will query below
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyDOqfm-oP_UKSq5ayaR72V_R-p8W1JJvrY", 
    libraries,
  });
  
  // Connects Entire store to Hook Component
  const store = useSelector(store => store);
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);




  //Checks DB for different product types to display specific pins on map
 function iconSelect (marker) {
  if (marker.product_type_food !== '{}') {
    console.log('packaged pin')
    return packagedPin
  }
  else if (marker.product_type_fresh !== '{}') {
    console.log('fresh pin')
    return freshPin
  }
  else if (marker.product_type_bev !== '{}'){
    console.log('drink pin')
    return drinkPin
  }
  else
    return 'no category to display';
}



 

  






  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        panToLocate({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => null
    );
    mapRef.current = map;
  }, []);
  
  const panToLocate = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  const panToSearch = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";

  return (
    <div className="mapAPI">
      <Locate panToLocate={panToLocate} />
      <Search panToSearch={panToSearch} />
      <div className="map">
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={8} 
          center={center} 
          options={options}
          onLoad={onMapLoad}
        >
        {markers.map((marker) => (
          <Marker
           key={`${marker.latitude}-${marker.longitude}`}
           position={{ lat: Number(marker.latitude), lng: Number(marker.longitude) }}
           onClick={() => {
             setSelected(marker);
           }}



           // icon for map
           icon={{ 
             url: iconSelect(marker),
             origin: new window.google.maps.Point(0, 0),
             anchor: new window.google.maps.Point(15, 15),
             scaledSize: new window.google.maps.Size(30, 30),
           }}
         />


         
       ))}

{/* INFO WINDOW */}
       {selected ? (
         
        <InfoWindow
           position={{ lat: Number(selected.latitude), lng: Number(selected.longitude) }}
           onCloseClick={() => {
             setSelected(null);
           }}>
            <div className='infoWindow'>
              <Row>
                <Col xs="3">
                  <img class='infoWindowImg' src={selected.product_img_one} alt={selected.product_type_one} />
                </Col>

                <Col xs="9">
                  <h2>{selected.business_name}</h2>
                  <p>{selected.story}</p>
                  {/* {JSON.stringify(selected)} */}
                  {/* NEEDS TO BE LOOKED AT // NOT GETTING MAKER ID */}
                  <Button size="sm" color="link" onClick={() => props.history.push(`/makerCard/${selected.profile_id}`)} >See More...</Button>
                </Col>
              </Row> 
            </div>
        </InfoWindow>

          ) : null}
        </GoogleMap>
      </div>
    </div>
  );
}

// Button on DOM, upon click will take the user to their current location based on their GeoLocation
// Uses browser to get geolocation via Latitude and Longitude
function Locate({ panToLocate }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position)
            panToLocate({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src='https://cdn.osxdaily.com/wp-content/uploads/2014/05/compass-icon-ios-300x300.png' alt='location - compass' />
    </button>
  );
}

function Search({panToSearch}) {
  const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} =usePlacesAutocomplete({
    requestOptions: {
      // Suggest locations near this Lat and Lng point (Minneapolis MN)
      location: {lat: () => 44.977753, lng: () => -93.265015 },
      // Suggests locations with defined radius below off of the defined point above
      radius: 100 * 1000,
    }
  })

  return(

   <Container className='search'>
    <Combobox onSelect={async (address) => {
      // After a suggestion is chosen will clear out the suggestion box
      setValue(address, false);
      clearSuggestions();
      // A try to that takes the address selected it, gets its info with getGeoCode, after thats complete, take the Lat and Lng with getLatLng to call the pantTo function passed in form props
      try{
        const results = await getGeocode({address});
        const {lat, lng} = await getLatLng(results[0]);
        console.log(lat, lng);
        panToSearch ({lat, lng});
      }catch(error) {
        console.log("ERROR!!!");
      }
      }}>

      <ComboboxInput
        className="searchInput"
        value={value} 
        onChange={(e) => {
            setValue(e.target.value);
          }} 
        disabled={!ready}
        placeholder="Enter Address"
      />

      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" && data.map(({id, description}) => 
          <ComboboxOption key={id} value={description}/> 
          )}
        </ComboboxList>
      </ComboboxPopover>

    </Combobox>
  </Container>
  )
}


export default withRouter(connect(mapStoreToProps)(LocalMap));