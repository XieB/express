let port = 3000;
let express = require('express');
let app = express();

app.listen(port);

let router = require('./receive');
app.use(router);