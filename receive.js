var express = require('express');
var router = express.Router();
let sendRes = require('./send');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/baidu', async function(req, res, next) {
    let data = await sendRes.getBaidu();
    res.send(data);
});

router.get('/qq', async function(req, res, next) {
    let data = await sendRes.getQq();
    res.send(data);
});

module.exports = router;