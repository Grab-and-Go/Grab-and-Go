import React, { useState, useEffect } from 'react';
import Newmap from "./components/Map/Map";
import Axios from "axios";
import Loader from "./components/Loader"
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";
const Documenu = require('documenu');
Documenu.configure('16b00f3cfdd6f2c51bf522089e62c490');






const Hero = ({ handleLogout }) => {

    const [eventData, setEventData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            const res = await fetch("https://api.documenu.com/v2/restaurants/zip_code/98105?size=10&page=1&fullmenu=true&key=16b00f3cfdd6f2c51bf522089e62c490")
            
            const {data} = await res.json()

            setEventData(data)
            setLoading(false)
            
        }
        
        fetchEvents()
        console.log(eventData);

    }, [])
    
    // const [query, setQuery] = useState("")

    // const documenuAPIkey = "16b00f3cfdd6f2c51bf522089e62c490"
    // const documenuURL = `https://api.documenu.com/v2/restaurant/4072702673999819?key=${documenuAPIkey}`;

    /*
    const getData = async () => {
        const result = await Axios.get(documenuURL);
        console.log(result);
    }
    */
   
   
       const getData = async () => {

        const params = {
            "lat": 40.7128,
            "lon": -74.0060,
            "minutes": 10,
            "mode": "walking", 

        }
           let result = await Documenu.Restaurants.withinTravelRadius(params);
           console.log(result);
            
       }
       
       
       /*
       const getMenu = async () => {
        const params = {
            "lat": "40.710152",
            "lon": "-74.005486",
            "distance": "1",
            "page": "1"
        }

        let result = await Documenu.MenuItems.searchGeo(params);
           console.log(result);
            
       }
       */
       




    // const onSubmit = e => {
    //     e.preventDefault();
    //     getData();
       
    // }

    // const onChange = e => {
    //     setQuery(e.target.value);
    // }



    return (
        <section className="hero">
            <nav>
                <h2 onClick={function(event){getData()}} >Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <form className="search-form" >
                <input type="text" placeholder="search" autoComplete="off"  />
                <button>Search</button>
            </form>
            {/* <div style={{ width: "100vw", height: "50vh" }}>
                <WrappedMap
                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC51cQ90JnlsT4CkBAb1AIVa2ynRRqz49A"}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}

                />
            </div> */}
            <div>
                { !loading ?<Newmap eventData={eventData} />: <Loader />}
                
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
