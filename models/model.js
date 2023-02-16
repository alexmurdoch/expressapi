const mongoose = require('mongoose');
const customersSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    address: {
        type: String,
        required: [true, 'Please add address']
    },
    birthdate: {
        type: Date
    },
    email: {
        type: String
    },
    accounts: {
        type: Array
    },
    tier_and_details: {
        type: Object
    }


    
// _id
// 5ca4bbcea2dd94ee58162a68
// username
// "fmiller"
// name
// "Elizabeth Ray"
// address
// "9286 Bethany Glens
// Vasqueztown, CO 22939"
// birthdate
// 1977-03-02T02:20:31.000+00:00
// email
// "arroyocolton@gmail.com"
// active
// true

// accounts
// Array

// tier_and_details
// Object
});
module.exports = mongoose.model('customers', customersSchema)