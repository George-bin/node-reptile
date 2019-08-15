const http = require('http');
const https = require('https');
const fs = require('fs');
const app = require('./app');

// 启动服务 start
let httpServer = http.createServer(app);
httpServer.listen(80);
httpServer.on('error', function() {
	console.log('服务启动失败!')
});
httpServer.on('listening', function() {
	console.log('服务启动，端口80!');
});
// 启动服务 end


// https服务start
// const httpsOption = {
// 	key: fs.readFileSync('./ssl/gengshaobin.top.key'), //证书文件的存放目录
// 	cert: fs.readFileSync('./ssl/gengshaobin.top.pem')
// };

const httpsOption = {
	key: fs.readFileSync('./local-ssl/private.key'), //证书文件的存放目录
	cert: fs.readFileSync('./local-ssl/mydomain.crt')
};
let httpsServer = https.createServer(httpsOption, app)
httpsServer.listen(7777);
httpsServer.on('error', function() {
	console.log('https服务启动失败!')
});
httpsServer.on('listening', function() {
	console.log('https服务启动，端口7777!');
});
// https服务end