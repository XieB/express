const express = require('express');
const router = express.Router();
const socket = require('./socket');
const reqInterface = require('./request');
const log = require('./log');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/wstest',async (req, res, next)=>{
    log.info(req);
    let data = await reqInterface.getBaidu();
    res.send(data.data);
});

router.post('/posttest',(req,res,next)=>{
    log.info(req.body);
    res.send(req.body);
})

module.exports = router;