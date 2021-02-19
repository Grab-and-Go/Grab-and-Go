import React, { useState, useEffect } from 'react';
import Restaurant from "./Restaurant";
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
           

            </div>
 <Restaurant/>
        </section>
     
       
        
        
           
        
    )
}


export default Hero