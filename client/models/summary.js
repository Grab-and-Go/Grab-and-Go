const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summarySchema = new Schema({
  title: {
    type: String,
    required: true
  },

  subtitle: {
    type: String,
  },
  
  authors: {
    type: [String],
  },
  
  description: {
    type: String,
  },
  
  image: {
    type: String,
  },
  
  link: {
    type: String, 
  },
  

});

const Summary = mongoose.model("Book", summarySchema);

module.exports = Summary;
