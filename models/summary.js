const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summarySchema = new Schema({
  user: {
    type: String, 
    required: true
  },

  restaurantName: {
    type: String, 
  },

  itemName: {
    type: String,
    required: true
  },

  price: {
    type: Number,
  },
  
  calories: {
    type: Number,
  },
  
  distance: {
    type: Number,
  },
  


});

const Summary = mongoose.model("Summary", summarySchema);

module.exports = Summary;
