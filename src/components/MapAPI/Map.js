import React from 'react';
import {GoogleMap, useLoadScript, Marker, InfoWindow, DistanceMatrixService} from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import mapStoreToProps from '../../redux/mapStoreToProps';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

// import FilterDropdown from '../FilterDropdown/FilterDropdown';
import {Button, Col, Container, Row, Spinner} from 'reactstrap';

import {useSelector} from 'react-redux';
import MakerCard from '../HomePage/MakerCard/MakerCard'

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
    setMarkers(props.store.maker);
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
  const [origin, setOrigin] = React.useState()

  //Checks DB for different product types to display specific pins on map
  function iconSelect (marker) {
    if (marker.product_type_food !== '{}') {
      return packagedPin
    }
    else if (marker.product_type_fresh !== '{}') {
      return freshPin
    }
    else if (marker.product_type_bev !== '{}'){
      return drinkPin
    }
    else
      return 'no category to display';
  }

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
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
    console.log("coords",lat, lng)
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(13.5);
  }, []);

  const panToSearch = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
  }, []);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return <Spinner color="primary"/>;

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
        <>
          {marker.approved_maker ? 
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
                scaledSize: new window.google.maps.Size(35, 35),
              }}
            />
            :
            null
          }
        </>
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
                   <Button size="sm" color="link" className="infoWindowSeeMoreBtn" onClick={() => props.history.push(`/makerCard/${selected.profile_id}`)}>See More...</Button>
                 </Col>
               </Row> 
             </div>
         </InfoWindow>) : null}
         </GoogleMap>
         <DistanceMatrix />
         </div>
       </div>
   );
}

function DistanceMatrix(){

  const props = useSelector(props => props);
  // const [distanceSlides, setDistanceSlides] = React.useState([]);
  const [renderCount, setRenderCount] = React.useState(0);
return(
  <div>
    {renderCount === 0 ?(
      <>
    <DistanceMatrixService
      options={{
      destinations: props.maker.map((destinations) => {
        const lat = Number(destinations.latitude);
        const lng = Number(destinations.longitude);
        return {lat , lng};
      }),
      origins: [{lng:-93.29471079999999, lat:44.9508563}],
      travelMode: "DRIVING",
      unitSystem: window.google.maps.UnitSystem.IMPERIAL,
      }}
      callback = {(response, status) => {
        if(response === null) {
          setRenderCount(0);
          return
        } else {
        response.rows[0].elements.forEach((element, index) => {
        console.log(props.maker[index]);
          props.maker[index].distanceText = element.distance.text;
          props.maker[index].distanceValue = element.distance.value;
        });
        setRenderCount(1);
      }}}
    />
      </>)
      :
      <div className='distanceMatrixSlides list-body'>
      <br/>
      <h2>Local Makers Near You</h2>
      <hr/>
        {renderCount === 0 ?
          null
          :
          props.maker.sort((a,b) => a.distanceValue - b.distanceValue).map((maker) => {
            return  (
              <>
            <div className='matrixSlide'>
  
            {maker.approved_maker ?
                <MakerCard maker={maker} key={maker.id} fav={props.SF}/>
            :
            null
            }
            </div>
            </>
          )})
        }
        </div>
    }
  </div>
  )
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
            console.log(position);
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
        // setOrigin(lat, lng);
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