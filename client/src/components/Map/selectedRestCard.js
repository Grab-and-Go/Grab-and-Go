import React from 'react'

const selectRestCard = ({ props }) => {
    return (
        <div>
          {props.results((item) => (
            <div className="card text-center float-left m-3" id="restaurant-card">
              <div class="card-body" key={item.restaurant_id}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/food.jpeg"}
                  alt={props.name}
                  class="image"
                ></img>
                <h5 class="card-title">{item.restaurant_name}</h5>
                <p class="card-text">
                  <a href={item.restaurant_website} target="_blank">
                    Visit website!
                  </a>
                </p>
                <span onClick={() => props.handleMenu(item.menus[0].menu_sections)}>
                  View Menu
                </span>
              </div>
            </div>
          ))}
        </div>
      );
}

export default selectRestCard