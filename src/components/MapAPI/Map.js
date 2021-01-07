import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import FilterDropdown from '../FilterDropdown/FilterDropdown';
import {Container} from 'reactstrap';
import {useSelector} from 'react-redux';

// Styles Imports
import './Map.css';
import mapStyles from "./mapStyles";
import "@reach/combobox/styles.css";
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

function LocalMap() {

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



// EMMMA HERE
// Add check for each pin on if they have anything populated in DB or not

  function iconSelect (arrayCheck, arrayCheck2, arrayCheck3) {
    if (arrayCheck3.length === 0) {
      return drinkPin
    } else {
      return 
    }
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



           // Add the three main type arrays, fresh, Beverage, Packaged
           icon={{
             url: iconSelect(marker.product_type_one),
             fillColor: '#0000ff',
             strokeColor: '#0000ff',
             fillOpacity: 1,
             origin: new window.google.maps.Point(0, 0),
             anchor: new window.google.maps.Point(15, 15),
             scaledSize: new window.google.maps.Size(30, 30),
           }}
         />


         
       ))}

       {selected ? (
         <InfoWindow
           position={{ lat: Number(selected.latitude), lng: Number(selected.longitude) }}
           onCloseClick={() => {
             setSelected(null);
           }}>
           <div className='infoWindow'>
              <img class='infoWindowImg' src={selected.product_img_one} alt={selected.product_type_one} />
                <h2>{selected.business_name}</h2>
                <p>{selected.story}</p>
              </div>
            </InfoWindow>
          ) : null}

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


export default LocalMap;