const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summarySchema = new Schema({
  name: {
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
