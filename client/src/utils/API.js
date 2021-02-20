import axios from "axios";


export default {

  getRestaurants: function (zipcode) {
    return axios.get("https://api.documenu.com/v2/restaurants/zip_code/" + zipcode + "?size=10&page=1&fullmenu=true&key=cc2a48384e529eea18357409362ff6d8");
  }
};