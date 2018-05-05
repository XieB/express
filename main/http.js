const express = require('express');
const router = express.Router();
const socket = require('./socket');
const reqInterface = require('./request');
const log = require('./log');


router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/wstest',async (req, res, next)=>{
    let data = await reqInterface.getBaidu();
    res.send(data.data);
});

module.exports = router;