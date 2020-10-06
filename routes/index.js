var express = require('express');
var router = express();
const fs = require('fs');

const eventcreation = require('../controllers/eventcreation');

router.post('/eventcreation', eventcreation.insert);

router.post('/findevent', function(req, res) {
    try {
        let rawdata = fs.readFileSync('eventlist.json');
        let eventlist = JSON.parse(rawdata);
        // var filtered = where(eventlist, { eventname: "meetup" });
        console.log(req.body.eventname)
        var filtered = eventlist.filter(function(el) {
            return el.eventname.toLowerCase().indexOf((req.body.eventname).toLowerCase()) !== -1
        })
        return res.status(200).send({ status: 'success', message: 'success', eventlist: filtered });
    } catch (error) {
        res.json(error.message)
    }

})

module.exports = router;