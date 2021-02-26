import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group d-flex">
        <span className="fluid" style={{display: "inline-block"}}>
        <input style={{float: "left"}}
          value={props.search}
          onChange={props.handleInputChange}
          name="restaurant"
          list="restaurants"
          type="text"
          className="form-control"
          placeholder="Enter a zipcode for results"
          id="restaurant"
        />
        <datalist id="restaurants">
          {props.restaurants.map(restaurant => (
            <option value={restaurant} key={restaurant} />
          ))}
        </datalist>
        </span>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;