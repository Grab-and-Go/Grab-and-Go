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

  orderArray: {
    type: Array,
    required: true
  },

  totalCost: {
    type: Number,
  },
  
  calories: {
    type: Number,
  },
  
  distance: {
    type: Number,
  }
  


});

const Summary = mongoose.model("Summary", summarySchema);

module.exports = Summary;
