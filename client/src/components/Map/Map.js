import React, { useState, useEffect } from 'react';
import GoogleMapReact from "google-map-react";
import "./style.css";
import LocationMarker from "./LocationMarker";
import Locationinfobox from "./LocationInfoBox";


const Map = ({ results, center }) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = results.map(item => {
        return <LocationMarker
            lat={item.geo.lat} lng={item.geo.lon} onClick={() => setLocationInfo({ name: item.restaurant_name, type: item.cuisines[1] === null ? item.cuisines[0] : item.cuisines[1], phone: item.restaurant_phone })}
        />
    })

    const zoom = 14

    return (
        <div className="map">
            <GoogleMapReact
                // bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
                bootstrapURLKeys={{ key: "AIzaSyCuYe9_LQT30CkJ5wIQA91_l5CjeFCzyyw" }}
                center={center}
                defaultZoom={zoom}

            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <Locationinfobox info={locationInfo} />}
        </div>
    )
}


export default Map;