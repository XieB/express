let port = 8000;
let timeOut = 30000;    //心跳检测时间，毫秒

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: port });
const url = require('url');
console.log('ws server run on ' + port);
let cons = {};

//心跳检测
function noop() {}

function heartbeat() {
    this.isAlive = true;
}

const interval = setInterval(function ping() {
    for (let x in cons){
        let ws = cons[x];
        if (ws.isAlive === false) {
            delete cons[x];
            return ws.terminate();
        }
        ws.isAlive = false;
        ws.ping(noop);
    }
    console.log(cons);
}, timeOut);


//订阅链接
wss.on('connection', function(ws,req) {
    let queryObj = url.parse(req.url,true); //解析参数
    let userId = queryObj.query.userId;
    cons[userId] = ws;
    ws.isAlive = true;
    //绑定事件
    ws.on('pong', heartbeat);

    ws.on('message', function(message) {
        console.log('received:%s', message);
    });

    ws.on('error',function(){
        if (cons[userId]) delete cons[userId];
    });
    ws.on('close',function(){
        if (cons[userId]) delete cons[userId];
        console.log('close from client');
    })
});

module.exports = {
    sendToMobile : function(obj,toUserId){
        cons[toUserId].send(obj);
    }
}