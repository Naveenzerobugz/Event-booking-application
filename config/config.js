const mongoose = require('mongoose');
//mongodb://localhost:27017/zims
// mongodb://208.109.8.9:27017/zims
mongoose.connect('mongodb+srv://naveen:naveen@cluster0.rwyv3.mongodb.net/eventbookingapp?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection : ' + err)
        }
    });
//common
require('../models/indexmodel');