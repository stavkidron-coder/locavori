import React from 'react';
import {GoogleMap,
useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import FilterDropdown from '../FilterDropdown/FilterDropdown';
// import { formatRelative } from "date-fns";

// Styles Imports
import './Map.css';
import mapStyles from "./mapStyles";

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

  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  // Upon Click on map will add an object to the marker array
  // This records the Lat and Lng of the position clicked as well as the time it was clicked
  // This will appear as a robot on the map
  const onMapClick = React.useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(15);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";

  return (
      <div className="mapAPI">
        
      <Locate panTo={panTo} />
        <div className="map">
          <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={8} 
            center={center} 
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
          >
          {markers.map((marker) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => {
                setSelected(marker);
              }}
            //   icon={{
            //     url: `/icons8-robot-2-64.png`,
            //     origin: new window.google.maps.Point(0, 0),
            //     anchor: new window.google.maps.Point(15, 15),
            //     scaledSize: new window.google.maps.Size(30, 30),
            //   }}
            />
          ))}
          {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div className='infoWindow'>
                <h2>
                  <span role="img" aria-label="ROBOT">
                    🐣
                  </span>{" "}
                  Emma's Eggs
                </h2>
                <p>Supplies Limited: 2 Egg Max Per Customer Per Month</p>
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
function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position)
            panTo({
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

export default LocalMap;