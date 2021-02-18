
import React from "react"
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
// import LocationInfoBox from './LocationInfoBox'


const Map = ({ results, center, zoom }) => {
    // const [locationInfo, setLocationInfo] = useState(null)
    const markers = results.map((item) => {
        return <LocationMarker
            // key={item.restaurant_id}
            lat={item.geo.lat}
            lng={item.geo.lon}
        />
    })
    console.log(results)
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <LocationMarker lat={center.lat} lng={center.lng} />
                {/* {markers} */}
            </GoogleMapReact>
            {/* {locationInfo && <LocationInfoBox info={locationInfo} />} */}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map