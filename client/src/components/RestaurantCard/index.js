import React from "react";
import './style.css'


function RestaurantCard(props)
{
  
  return(
<div>
    {props.results.map(item => 
    <div className="card text-center float-left m-3" id="restaurant-card">
    <div class="card-body" key={item.restaurant_id}>
    
    <img src={process.env.PUBLIC_URL + "/assets/food.jpeg"} alt={props.name} class="image"></img>
      <h5 class="card-title">{item.restaurant_name}</h5>
      <p class="card-text"><a href={item.restaurant_website} target="_blank">Visit website!</a></p> 
      <button type="submit" className="btn btn-success">
          View Menu
        </button>
    </div>
  </div>
    )}
</div>

 );
}

export default RestaurantCard;