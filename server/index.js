// making simple server
// it can handle the response and request of a server
const https= require('http')
https.createServer((requ,Resp)=>{
    Resp.write("<p>adarsh gurjar</p>");
    Resp.end();
}).listen(2000);