const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: { type: Number, required: true },
    login: { type: String },
    email: { type: String },
    fav: { type: Array }
});
  
const users = mongoose.model('users', usersSchema);
module.exports = users;
  