import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";


function Map() {
    return (<GoogleMap 
    defaultZoom={10}
    defaultCenter={{lat:47.6062, lng:-122.3321}}
    />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
    return <div>
        <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"} />
        </div>
}