const port = 3000;
const app = require('express')();
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());    //form-data数据,php curl数据如果是数组则为form-data,如果是字符串则是x-www-form-urlencoded


app.listen(port);

let main = require('./main/http');
app.use(main);