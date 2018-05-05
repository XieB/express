let port = 3000;
let express = require('express');
let app = express();

app.listen(port);

let main = require('./main/http');
app.use(main);