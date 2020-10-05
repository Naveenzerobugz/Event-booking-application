const mongoose = require('mongoose');
var Schema = new mongoose.Schema({
    eventname: {
        type: String
    },
    eventdate: {
        type: Date
    },
    totalseats: {
        type: Number
    },
    bookedseats: {
        type: Number
    },
    eventimg: {
        type: String
    },
    status: {
        type: Number
    },
    createddate: {
        type: Date,
        default: Date.now
    },
    updateddate: {
        type: Date,
    },
})
var eventcreation = new mongoose.model('eventcreation', Schema);
module.exports = eventcreation;