const http=require('http');
// const dataI=require('./data');

http.createServer((request,response)=>{
   response.writeHead(200,{'Content-Type':'application\json'});
// response.writeHead(200,{'Content-Type':'text\html'});

   response.write(JSON.stringify({name:"adars gurjar",email:"adarsh7470827890@gmail.com"}));

   response.end();
}).listen(5800);