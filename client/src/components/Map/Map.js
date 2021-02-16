import React from 'react';
import GoogleMapReact from "google-map-react";
import "./style.css";
import LocationMarker from "./LocationMarker";


const Newmap = ({ center, zoom }) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A"}}
                defaultCenter={ center }
                defaultZoom= { zoom }
            >
                <LocationMarker lat={center.lat} lng={center.lng}/>
            </GoogleMapReact>
        </div>
    )
}

Newmap.defaultProps = {
    center: {
        lat: 47.6062, 
        lng: -122.3321
    },
    zoom: 14
}

export default Newmap;