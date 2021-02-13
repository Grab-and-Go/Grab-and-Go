import axios from "axios";


export default {
  
  getRestaurants: function(zipcode) {
    return axios.get("https://api.documenu.com/v2/restaurants/zip_code/"+zipcode+"?size=10&page=1&fullmenu=true&key=faa129d3021482c56c9bac54f5d14c37");
  }
};