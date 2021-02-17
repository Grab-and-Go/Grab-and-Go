import React, { useState } from 'react';
import Restaurant from "./Restaurant";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import Map from "../components/Map";
import DeveloperContext from "../utils/DeveloperContext";

const Hero = ({ handleLogout }) => {
    const [query, setQuery] = useState("");
    // const [order, setOrder] = useState({
    //     orders:[]
    //   });


    const onSubmit = e => {
        e.preventDefault();
    }

    const onChange = e => {
        setQuery(e.target.value);
    }
return (
    
    <section className="hero">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Grab and Go</a>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} style={{float: "right"}} >Logout</button>
            
            </nav>

            <div style={{ width: "100vw", height: "20vh" }}>
                {/* <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A"}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />} */}

                {/* /> */}

            </div>
 <Restaurant/>
        </section>
     
       
        
        
           
        
    )
}

// function Map() {
//     return (<GoogleMap
//         defaultZoom={10}
//         defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
//     />
//     );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Hero