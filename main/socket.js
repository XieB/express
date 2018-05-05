let port = 8000;

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: port });
const url = require('url');
const log = require('./log');
log.info('ws server run on ' + port);
let cons = {};

wss.on('connection', (ws, req) => {
    let queryObj = url.parse(req.url,true); //解析参数
    let userId = queryObj.query.userId;
    cons[userId] = ws;  //记录

    //绑定事件
    ws.on('message', message => {
        console.log('received:%s', message);
    });
    ws.on('error',function(){

    });
    ws.on('close',function(){

    })
});

module.exports = {
    sendToMobile : (obj, toUserId) => {
        cons[toUserId].send(obj);
    }
};