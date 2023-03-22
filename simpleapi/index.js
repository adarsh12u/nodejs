const http=require('http');
const dataI=require('./data');

http.createServer((request,response)=>{
   response.writeHead(200,{'Content-Type':'application\json'});
// response.writeHead(200,{'Content-Type':'text\html'});

   response.write(JSON.stringify(dataI));

   response.end();
}).listen(3305);