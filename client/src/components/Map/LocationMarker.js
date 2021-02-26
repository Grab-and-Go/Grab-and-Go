import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from "@iconify/icons-mdi/restaurant-menu";

const LocationMarker = ({ lat, lng, onClick }) => {

    const markerStyle={
        fontSize: "1.3rem",
        color: "#177245"
    };
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" style={markerStyle} />
        </div>
    )
}

export default LocationMarker
