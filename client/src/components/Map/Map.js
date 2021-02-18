import React from 'react';
import GoogleMapReact from "google-map-react";
import "./style.css";
import LocationMarker from "./LocationMarker";

const Map = ({ results, center, zoom }) => {

    const markers = results.map(item => {
        return <LocationMarker lat={item.geo.lat} lng={item.geo.lon} />
    })
    console.log(results);

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A"}}
                defaultCenter={ center }
                defaultZoom= { zoom }
            >
             
                {/* {markers} */}
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 47.6062, 
        lng: -122.3321
    },
    zoom: 14
}

export default Map;