import React, { useState } from 'react';
import Axios from "axios";
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";





const Hero = ({ handleLogout }) => {
    const [query, setQuery] = useState("")
    
    const documenuAPIkey = "16b00f3cfdd6f2c51bf522089e62c490"
    const documenuURL = `https://api.documenu.com/v2/restaurant/4072702673999819?key=${documenuAPIkey}`;
    

    const getData = async () => {
        const result = await Axios.get(documenuURL);
        console.log(result);
    }

    const onSubmit = e => {
        e.preventDefault();
        getData();
    }

    const onChange= e => {
        setQuery(e.target.value);
    }


    return (
        <section className="hero">
            <nav>
                <h2 onClick={getData} >Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <form className="search-form" onSubmit={onSubmit}>
                <input type="text" placeholder="search" autoComplete="off" onChange={onChange}  />
                <button>Search</button>
            </form>
            <div style={{ width: "100vw", height: "50vh" }}>
                <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A"}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}

                />

            </div>

        </section>
    )
}

function Map() {
    return (<GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
    />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Hero
