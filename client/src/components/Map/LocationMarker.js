import React from 'react';
import { Icon } from '@iconify/react';
import locationIcon from "@iconify/icons-mdi/restaurant"

const LocationMarker = ({ lat, lng, onClick }) => {

    const markerStyle={
        fontSize: "2rem",
        color: "purple"
    };
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" style={markerStyle} />
        </div>
    )
}

export default LocationMarker
