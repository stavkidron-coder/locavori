import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import {Container} from 'reactstrap';
import {useSelector} from 'react-redux';
// import { formatRelative } from "date-fns";

// Styles Imports
import './Map.css';
import mapStyles from "./mapStyles";
import "@reach/combobox/styles.css";

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

function LocalMap() {

  // Upon DOM load will query below
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyDOqfm-oP_UKSq5ayaR72V_R-p8W1JJvrY", 
    libraries,
  });
  const store = useSelector(store => store);
  const [markers, setMarkers] = React.useState(store.maker);
  
  const [selected, setSelected] = React.useState(null);

  // Upon Click on map will add an object to the marker array
  // This records the Lat and Lng of the position clicked as well as the time it was clicked
  // This will appear as a robot on the map
  // const onMapClick = React.useCallback((e) => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       tim1e: new Date(),
  //     },
  //   ]);
  // }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  
  const panToLocate = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  const panToSearch = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";

  return (
    <div className="mapAPI">
      {/* {JSON.stringify(store.maker)} */}
      <Locate panToLocate={panToLocate} />
      <Search panToSearch={panToSearch} />
      <div className="map">
        <GoogleMap 
          mapContainerStyle={mapContainerStyle} 
          zoom={8} 
          center={center} 
          options={options}
          // onClick={onMapClick}
          onLoad={onMapLoad}
        >
        {store.maker.map((marker) => (
          <Marker
            key={`${marker.latitude}-${marker.longitude}`}
            position={{ lat: Number(marker.latitude), lng: Number(marker.longitude) }}
            onClick={() => {
              setSelected(marker);
            }}
          //   icon={{
          //     url: `/icons8-robot-2-64.png`,
          //     origin: new window.google.maps.Point(0, 0),
          //     anchor: new window.google.maps.Point(15, 15),
          //     scaledSize: new window.google.maps.Size(30, 30),
          //   }}
          >{selected ? (
            <InfoWindow
              position={{ lat: selected.longitude, lng: selected.latitude }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div className='infoWindow'>
              <img class='infoWindowImg' src={marker.product_img_one} alt={marker.product_type_one} />
                <h2>{marker.business_name}</h2>
                <p>{marker.story}</p>
              </div>
            </InfoWindow>
          ) : null}
          </Marker>
        ))}
        
        <div className="filter">
          <FilterDropdown/>
        </div>
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
        console.log("ERROR!!!")
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


export default LocalMap;