import React from "react";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import App from "../pages/Restaurant";

function Map(eventData) {
  eventData.map((item) => {
    return (
      <LocationMarker
        key={item.restaurant_id}
        lat={item.geo.lat}
        lng={item.geo.lon}
      />
    );
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A" }}
        // defaultCenter={center}
        // defaultZoom={zoom}
      >
        <LocationMarker />
        {/* {markers} */}
      </GoogleMapReact>
      {/* {locationInfo && <LocationInfoBox info={locationInfo} />} */}
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
