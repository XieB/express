let http = require('http');
function requestUrl(obj = {}){
    return new Promise((resolve,reject)=>{
        let _data = '';
        let defaultOption = {
            port:80,
            path:'/',
            method:'get',
            hostname : 'localhost',
        };
        let options = Object.assign(defaultOption,obj);
        let req = http.request(options, res => {
            res.setEncoding('utf-8');
            res.on('data',function(chunk){
                _data += chunk;
            });
            res.on('end',function(){
                resolve(_data);
            });
        });
        req.on('error',function(err){
            reject(err);
        });
        req.end();
    })
}
module.exports = {
    getBaidu : function(){
        return requestUrl({hostname : 'www.baidu.com'});
    },
    getQq : function(){
        return requestUrl({hostname : 'www.qq.com'});
    }
}