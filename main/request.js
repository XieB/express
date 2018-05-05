const axios = require('axios');
const Qs = require('qs');

const http = axios.create({
    baseURL: '',
    transformRequest: [function (data) {
        data = Qs.stringify(data);
        return data;
    }]
});

module.exports = {
    getBaidu : ()=>{
        return http.get('http://www.baidu.com');
    },
};