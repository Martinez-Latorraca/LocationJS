import React from 'react';
import { 
    GoogleMap,
    withGoogleMap,
    withScriptjs, 
    Marker
} from 'react-google-maps';
import { shareActualPosition } from './shareActualPosition';

const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");


export let latitude;
export let longitude;


function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition);

};

function showPosition(position) {
    latitude = parseFloat(position.coords.latitude);
    longitude = parseFloat(position.coords.longitude);
}

getLocation();

function autoUpdate() {
    navigator.geolocation.getCurrentPosition(function(position) {  
      var newPoint = new window.google.maps.LatLng(position.coords.latitude, 
                                            position.coords.longitude);
        <Marker position={newPoint} />
    }); 
    console.log('Congratulation, you reach the target');
    
    // Call the autoUpdate() function every 5 seconds
    setTimeout(autoUpdate, 5000);

    
  }
  

const map = (props) => { 
   
     return (       
        <GoogleMap 
           defaultZoom ={18}
           defaultCenter={{lat: latitude, lng: longitude}}>
           <Marker position={{ lat: latitude, lng: longitude}} />
           <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
            >
                <div className="dropdown">
                    <button className="dropbtn">Share Location
                            <div className="dropdown-content">
                                <div onClick ={ () =>  shareActualPosition()} > Actual location</div>
                                <div onClick ={ () => autoUpdate()}>Real-Time location</div>
                            </div>
                    </button>
                </div>
            </SearchBox>
            
        </GoogleMap>
     );
     
};



export default withScriptjs((withGoogleMap(map)));