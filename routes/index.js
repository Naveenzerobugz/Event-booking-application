var express = require('express');
var router = express.Router();

router.get('/testing', function(req, res) {
    return res.json('test app working successfully');
})
module.exports = router;