import React from 'react';
import GoogleMapReact from "google-map-react";
import "./style.css";
import LocationMarker from "./LocationMarker";

const Map = ({ results }) => {

    const markers = results.map(item => {
        return <LocationMarker lat={item.geo.lat} lng={item.geo.lon} />
    })
    console.log(results);
    console.log(markers);

    const center = {
        lat: results.length > 0 ? results[0].geo.lat : 47.6062, 
        lng: results.length > 0 ? results[0].geo.lon : -122.3321
    }

    const zoom = 13

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A"}}
                defaultCenter={{ lat: results.length > 0 ? results[0].geo.lat : 47.6062, 
                    lng: results.length > 0 ? results[0].geo.lon : -122.3321 }}
                defaultZoom= { zoom }
            >
             {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
                {markers}
            </GoogleMapReact>
        </div>
    )
}

/*
Map.defaultProps = {
    
    center: {
        lat: results.length > 0 ? results[0].geo.lat : 47.6062, 
        lng: results.length > 0 ? results[0].geo.lon : -122.3321
    },
    zoom: 14
    
}
*/

export default Map;