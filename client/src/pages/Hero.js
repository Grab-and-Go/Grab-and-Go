import React, { useState, useEffect } from 'react';
import Restaurant from "./Restaurant";
// import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
import Newmap from "../components/Map/Map";
import API from '../utils/API';

const Hero = ({ handleLogout }) => {
    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // const fetchEvents = async () => {
        //     setLoading(true)
        //     const res = await fetch("")
        //     const { events } = await res.json()
        //     setEventData(events)
        //     setLoading(false)
        // }
        // fetchEvents()
        // console.log(eventData);
        getRestaurants()
    }, [])

    function getRestaurants() {
        API.getRestaurants(98105)
        .then(res => 
            // setEventData(res.data.data)
            console.log(res.data.data)
        )
        .catch(err => console.log(err));
    }

   

 

    const [query, setQuery] = useState("")


    const onSubmit = e => {
        e.preventDefault();
    }

    const onChange = e => {
        setQuery(e.target.value);
    }
return (
    <section className="hero">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Grab and Go</a>
            <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} style={{float: "right"}} >Logout</button>
            
            </nav>

            <div style={{ width: "100vw", height: "20vh" }}>
                {/* <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A"}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                /> */}
            <Newmap />
            </div>
 <Restaurant/>
        </section>
       
        
        
           
        
    )
}

/*
function Map() {
    return (<GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
    />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
*/

export default Hero