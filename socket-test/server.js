let WebSocketServer = require('ws').Server
    ,wss = new WebSocketServer({port:8000});

wss.on('connection', function(ws) {
    console.log(wss.clients);
    ws.on('message', function(message) {
        console.log('received:%s', message);
    });
    ws.send('I am a message sent from a ws server');
});