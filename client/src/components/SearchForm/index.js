import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group d-flex">
        <span className="fluid" style={{position: "relative", display: "inline-block", direction: "ltr"}}>
        <input style={{float: "left"}}
          value={props.search}
          onChange={props.handleInputChange}
          name="restaurant"
          list="restaurants"
          type="text"
          className="form-control mr-sm-8"
          placeholder="Enter a zipcode"
          id="restaurant"
        />
        <datalist id="restaurants">
          {props.restaurants.map(restaurant => (
            <option value={restaurant} key={restaurant} />
          ))}
        </datalist>
        </span>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success" style={{ backgroundColor: "#d4e6c1", color: "#177245"}}>
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;