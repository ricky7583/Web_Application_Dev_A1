let mongoose = require('mongoose');


// create a model class
let contactModel = mongoose.Schema({
    name: String,
    contactnum: Number,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);