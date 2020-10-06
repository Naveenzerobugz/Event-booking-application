var express = require('express');
var router = express();

const eventcreation = require('../controllers/eventcreation');

router.post('/eventcreation', eventcreation.insert);
router.post('/findevent', eventcreation.eventlist);

router.get('/testing', function(req, res) {
    return res.json('test app working successfully');
})
module.exports = router;