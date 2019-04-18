const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countriesSchema = new Schema({
    id: { type: Number, required: true },
   title:{type: String}
});
  
const countries = mongoose.model('countries', countriesSchema);
module.exports = countries;
  