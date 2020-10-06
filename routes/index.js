var express = require('express');
var router = express();

const eventcreation = require('../controllers/eventcreation');

router.post('/eventcreation', eventcreation.insert);
router.get('/findevent/:eventname', eventcreation.eventlist);

router.get('/testing', function(req, res) {
    return res.json('test app working successfully');
})
module.exports = router;