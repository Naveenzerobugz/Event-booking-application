const mongoose = require('mongoose');

var ObjectId = require('mongodb').ObjectID;
var attendeeschema = new mongoose.Schema({
    eventbookingid: {
        type: ObjectId
    },
    attendeename: {
        type: Date
    },
})
var Schema = new mongoose.Schema({
    eventid: {
        type: ObjectId
    },
    name: {
        type: String
    },
    email: {
        type: Date
    },
    phoneno: {
        type: String
    },
    noofseats: {
        type: String
    },
    attendeenames: {
        type: [attendeeschema]
    },
    status: {
        type: String
    },
    createddate: {
        type: Date,
        default: Date.now
    },
    updateddate: {
        type: Date,
    },
})
var eventbooking = new mongoose.model('eventbooking', Schema);
module.exports = eventbooking;