const http = require('http');
const url = require('node:url');
const fs = require('fs');

const pathMap= new Map();
pathMap['/'] = 'index';
pathMap['/about'] = 'about';
pathMap['/contact'] = 'contact-me';



const myserver = http.createServer((req, res)=>{

  const path = req.url;
  let filePath = (pathMap[path]) ? 'pages/'+pathMap[path]+'.html' : 'pages/error.html'
  
  const fileContent =  fs.readFileSync(filePath,'utf-8');
  
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(fileContent);
  res.end();

})


myserver.listen(8080);